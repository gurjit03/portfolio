---
title: "Improving Google Page Speed Score Using Code Splitting"
description: "A practical guide to using code splitting to improve Lighthouse and Core Web Vitals scores."
date: "2019-08-20"
canonical: "https://medium.com/bitsrc/improving-google-page-speed-score-using-code-splitting-239d2a027e1b"
---

This post walks through **code splitting** as a lever for better **Lighthouse** scores and **Core Web Vitals**: shipping less JavaScript on the first paint, loading route- or feature-level chunks when they are needed, and avoiding regressions when new dependencies land in the bundle.

Topics I cover on Medium include:

- Why the initial bundle dominates Time to Interactive and main-thread work
- Using dynamic `import()` (and framework-level equivalents) without fragmenting the UX
- Measuring before and after: field data vs lab, and what to watch in DevTools

For the full walkthrough, examples, and diagrams, read the version on Medium (BitSrc).
