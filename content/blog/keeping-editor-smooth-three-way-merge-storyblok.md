---
title: "Merge trees, not frames: three-way JSON merge at Storyblok"
description: "Heavy merge work doesn’t belong on the main thread forever—tree diffs, Vue gotchas, conflict UX, and how we think about Web Workers for real customer JSON."
date: "2026-02-05"
---

_Est. 5 min read_

When you’re editing **large structured content** (nested blocks, arrays, deep trees), a **three-way merge** between _base_, _main_, and _your branch_ is the right mental model. The hard part isn’t the algorithm alone—it’s shipping it in a **browser** where the main thread also runs your Vue app, field focus, animations, and network callbacks.

Here’s the gist: **protect the thread first, then scale the merge.** Below are the lessons that stuck after building that experience at Storyblok—what we optimized for, what bit us, and **when moving patch-tree work to a Web Worker** stops being optional.

---

### The problem in one sentence

Users need to see **what changed**, **where conflicts are**, and **pick a side**—without the tab **freezing** on big stories.

---

### What “three-way merge” means here

You typically have:

1. **Base** – common ancestor  
2. **Main** – line you’re merging from  
3. **Yours** – release / pipeline / local draft  

The merge layer builds a **patch / change tree** (not just a flat text diff) so you can address **JSON pointers** into the document—fields and nested blocks—not only whole files.

In application code, that usually means: compute a patch tree from `(base, main, current)`, expose **per-pointer** state (conflict vs clean), and let the UI **resolve** choices and update a **resolve tree** that stays in sync when the user keeps editing.

---

### Lesson 1: The expensive part is the tree, not the button

Building the **diff/merge tree** for a large document can be **CPU-heavy**. On the main thread, that competes with:

- Vue reactivity and re-renders  
- Debounced editor updates  
- Scroll, hover, and input latency  

**Takeaway:** Treat “compute merge state” as a **budgeted** operation. If it spikes frames, users feel it before they understand merge.

**Worker angle:** Run patch-tree construction (and related derivations) **off the main thread**, post results back, and keep the UI **loading / stale-safe** until the worker responds.

---

### Lesson 2: Reactivity + deep trees = footguns

When integrating merge state into Vue (or similar frameworks):

- **Deep cloning** often appears because you need stable snapshots when content mutates in place.  
- **Circular dependencies** are easy to introduce if a `computed` that _depends_ on merge output also _feeds_ the same graph you use to build that output—so you split “build patch tree” from “derive UI state” deliberately.  
- If content is **debounced**, merge resolution must stay correct when updates land **while** base/main fetch is still resolving.

**Takeaway:** Merge isn’t a pure function bolted on the side; it’s **state machine + graph** work sitting next to reactive state.

**Worker angle:** The worker should receive **serializable** snapshots (structured clone). Keep reactive handles on the main thread; keep “math on trees” in the worker.

---

### Lesson 3: UX — unresolved vs resolved is a first-class model

Good merge UIs don’t only show a diff—they track **resolution**:

- Which nodes **need** a human choice  
- Which are **already** resolved  
- What happens when the user **edits** after partially resolving  

**Takeaway:** Persist resolution intent in a structure parallel to the patch tree (e.g. resolve tree / flags per pointer), and **reconcile** when content changes—don’t assume a one-shot merge.

---

### Lesson 4: When to reach for a Web Worker (checklist)

Consider a worker when **any** of these are true:

- Stories routinely exceed “small JSON” (deep nesting, many blocks).  
- You compute merge on **every** debounced edit or poll.  
- You see **long tasks** in the Performance panel or dropped frames when opening release compare.  
- You want merge to stay usable on **low-end** devices.

**Pattern:**

1. Main thread: fetch base / main / current → `postMessage` (clones) to worker  
2. Worker: build patch tree + derived artifacts  
3. Main thread: apply result to store; render per-pointer affordances  
4. Optional: **version** messages so slower responses don’t overwrite newer ones  

---

### Lesson 5: Ship incrementally

A sane path many teams take:

1. **Correctness first** – merge tree + conflict detection on the main thread, with debouncing and loading states.  
2. **Measure** – Performance tab, real customer-sized payloads.  
3. **Isolate** – pure functions / package boundary so the merge core is testable and portable.  
4. **Worker** – same conceptual API, different runtime for the hot path.

That matches how product engineering usually works: **prove the model**, then **protect the thread**.

---

### Doubtful things?

**Q: Isn’t a worker more complex?**  
Yes—serialization, error handling, and cancellation. The complexity buys **predictable** UI when payloads grow.

**Q: What about shared memory?**  
Often unnecessary at first. Start with `postMessage` and structured clone; optimize if profiling says copy/transfer is the bottleneck.

---

### Wrapping up

If you’re building **CMS merge** or **release compare** in the browser, **tree diff is a performance feature**—not only a correctness one. Once real customers throw **real JSON** at you, the same themes keep coming back:

- **Budget** merge computation like any other expensive UI path; spikes show up as jank before anyone reads a conflict badge.  
- **Separate** “build the patch tree” from “derive UI state” so reactivity doesn’t turn into circular graph hacks.  
- **Model** resolution explicitly—unresolved vs resolved isn’t a polish pass, it’s the product.  
- **Measure** on big stories, **isolate** the core, then **promote** the hot path to a worker without changing the mental model.

Get that order right and the editor stays trustworthy: users can see what changed, resolve what matters, and keep typing—without the tab turning into a slideshow.

---

_Suggested subtitle if you syndicate elsewhere: Three-way merge in the browser, SPAs, and why the main thread is a shared resource._
