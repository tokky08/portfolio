---
title: 'ポートフォリオを作り直しました！'
date: '2020-07-24'
---

どうも，tokky08（とっきー）です．この度は昔作ったポートフォリオを作り直しました．
技術的にはNext.jsを使って，初めてReactを用いて技術ブログ的なものを作りました．
今後ともよろしくお願いいたします！

You can use Static Generation for many types of pages, including:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.