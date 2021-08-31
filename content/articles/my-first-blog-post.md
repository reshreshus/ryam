---
title: My first Blog Post
description: Learning how to use @nuxt/content to create a blog
img: https://images.unsplash.com/photo-1630152389714-46b8c393f555?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80
alt: my first blog post

author:
  name: Benjamin
  bio: All about Benjamin
---

Welcome to my first blog post using content module
<author :author="author"></author>

## This is a heading

This is some more info

### This is a sub heading

This is some more info

### This is another sub heading

This is some more info

## This is another heading

This is some more info
<div class="p-4 mb-4 text-white bg-blue-500">
  This is HTML inside markdown that has a class of note
</div>

<info-box>
  <template #info-box>
    This is a vue component inside markdown using slots
  </template>
</info-box>

```js
export default {
  nuxt: 'is the best'
}
```
