---
title: Angular Signals
description: First post.
date: '2023-4-14'
categories:
  - sveltekit
  - svelte
published: true
---

Angular 17 arrives with an exciting advancement in state management: Angular Signals. Building upon its initial unveiling in the developer preview of Angular 16, this feature now emerges fully integrated, showcasing the platform's continuous evolution and commitment to enhancing the developer experience.

Rooted in reactive programming concepts, signals offer an intuitive and efficient approach to handle application states, marking a significant evolution in how we think about and manage state in Angular.

👨💻 **Decoding Angular Signals:**

At its essence, a signal in Angular is a reactive entity that wraps around a value. Whenever this value changes, the signal ensures that all dependent parts of the application are notified and updated synchronously. This system streamlines the update process, enhancing efficiency by eliminating extensive traversals and re-checks of the component tree, a common overhead in traditional state management.

🔍 **Writable and Computed Signals:**

Angular distinguishes two primary types of signals:

- **Writable Signals** - These signals permit direct modification of their values. A writable signal is created using the signal function and can be updated using .set() or .update() methods. Here's a glimpse into how they work:

```
const count = signal(0);
console.log('Initial count:', count()); // "Initial count: 0"

count.set(3);
console.log('Set count:', count()); // "Set count: 3"

count.update(value => value + 1);
console.log('Updated count:', count()); // "Updated count: 4"
```

2. **Computed Signals** - These are read-only signals that derive their values from other signals. They recalibrate whenever their source signals change, ensuring that the most current data is always represented:

```
   const count = signal(0);
   const doubleCount = computed(() => count() * 2);

   count.set(2);
   console.log('Double count:', doubleCount()); // "Double count: 4"
```

🔗 For a more in-depth exploration, check out the official Angular Signals documentation for Angular signals.

🔜 **Community Engagement and What's Next:** Are you already integrating Angular Signals in your projects? I'd love to hear about your experiences and insights in the comments below. Plus, stay tuned for my upcoming article where we'll dive into the exciting interplay between Angular Signals and the OnPush change detection strategy. This synergy is pivotal for optimizing performance and harnessing the full potential of reactive state management in Angular.
