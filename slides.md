---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: Mattia Manzati
drawings:
  persist: false
transition: slide-left
title: A Schema is all you need!
mdc: true
download: true
canvasWidth: 850
---

## A Schema is all you need!

---
layout: fact
---

# THANK YOU ORGANIZERS!


---
layout: image-left
image: /image-me.jpg
---

# Ego Slide
<br/>

- Push buttons
- Type things
- Break stuff
- Wear sweatshirt as cape
- This picture is not stack safe

---


<!--
I do not need to convince you that types are great.
Maybe we took few years to realize that, but thanks to tools like TypeScript that brought a type system into JavaScript, we were able to step up our codebases and finally build production grade applications in JavaScript.

And the more the typings are well written and strict, the more our code becames robust.

And is all nice and clean, but eventually we compile our code to deploy it and... types are gone.
Is that a problem of TypeScript's type getting removed while compiling?

Unfortunately that's not it. The problem is that our programs cannot live in a black box.
As soon we reach out from our program to the outside world, every assumption made while defining our strict types at compile time goes away.
And every application eventually has eventually to fetch data from some kind of persistence or api.



The problem with most data validation and trasformation libraries out there is they just do input validation!
They focus on ensuring an input value, which most of library defaulted to unknown, and turn it into a structure defined at runtime, but they miss completely turning it back to the input type.

Effect schema does both, encoding and decoding, and this sets it apart from other libraries.

What does it mean? Let's take an example, let's say you have some structured string, just read from a file, like a json string, and you are able to turn it into a data structure by just calling JSON.parse; an array, an object.



-->

---
layout: fact
---

## Happy Effect-ing!
Thanks for your time!
