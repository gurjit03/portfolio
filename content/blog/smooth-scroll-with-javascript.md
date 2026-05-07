---
title: "Smooth Scroll with JavaScript"
description: "Implementing smooth scroll behaviour in plain JavaScript — no libraries."
date: "2017-05-12"
canonical: "https://medium.com/@gurjitmehta/smooth-scroll-with-javascript-571283e9a3cd"
---

A short, focused tutorial on **smooth scrolling** using the browser platform: anchoring to in-page targets, respecting user motion preferences where possible, and keeping the implementation small enough to reason about.

On Medium I step through:

- `scrollIntoView` and `{ behavior: 'smooth' }` vs manual animation loops
- Edge cases such as nested scroll containers and offset headers
- A minimal helper you can drop into a page without pulling in a dependency

See the complete article on Medium for code listings and a copy-paste-friendly version of the approach.
