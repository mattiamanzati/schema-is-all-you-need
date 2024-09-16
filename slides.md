---
theme: default
class: text-center
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

<<< @/some-file.ts {monaco-run}

<!--
I do not need to convince you that types are great.
Maybe we took few years to realize that, but thanks to tools like TypeScript that brought a type system into JavaScript, we were able to step up our codebases and finally build production grade applications in JavaScript.

And the more the typings are well written and strict, the more our code becames robust.

And is all nice and clean, but eventually we compile our code to deploy it and... types are gone.
Everything can happen.
Is that a problem of TypeScript's type getting removed while compiling?

Unfortunately that's not it. The problem is that our programs do not live in a black box.
They usually reach the outside world for data, and as soon we do that, every assumption made while defining our strict types at compile time goes away.
And every application eventually has eventually to fetch data from some kind of persistence or api.

And to solve this, we add into our codebase libraries such as zod that perform data validation of the
response that cames from the storage or the APIs.

So we introduce tools like zod and now we are able to successfully pare any incoming data and validate
it against our schema.

-- example rewritten using zod

Our code changed a little but yeah, it works!

So what happens now that we have validated our incoming API data?
Seems odd, but most of the times you also have to send back data to other API or persist it back to some kind of storage.

The problem with most data validation and trasformation libraries out there is they just do input validation!
They focus on ensuring an input value, which most of library defaulted to unknown, and turn it into a structure defined at runtime, but they miss completely turning it back to the input type.

So zod won't be of any help here, we need to write additional code that given our data, produces back something that's accepted by our storage or APIs.

-- example code with zod + manual encoding

Ok, now that's not clean and small code as we had before, but hey, it works! So why should we bother about it?

-- adding property based testing
Ok so maybe we should care about it. I heard this fancy thing called property based testing, so maybe we can leverage that
to test our implementations and test if data is stored and handled the way we want.

-- generating json schemas
Now the impossible happens.
A customer comes in and says that he wants now json schemas to describe all the domain models that our application involves.

Again, don't you feel like you are kinda repeating yourself and maybe there is a better way to perform all this tasks?

In the end all of those tasks just deal with our user defined data structure right? 
So maybe there is a better way indeed.

-- AST
Let's go back to the drawing board.
The problem here is the way we defined our data structure.
Sure, we can't use TypeScript anymore since we now need to perform stuff at validation, but how do we do it?

Turns out the solution was always just under our nose.
What if instead of creating a solution specific for validation/encoding/arbitraries and json schema we instead focus on defining a runtime something that can be described by a TypeScript's type?

-- effect schema

Effect schema does both, encoding and decoding, and this sets it apart from other libraries.

What does it mean? Let's take an example, let's say you have some structured string, just read from a file, like a json string, and you are able to turn it into a data structure by just calling JSON.parse; an array, an object.



-->

---
layout: fact
---

## Happy Effect-ing!
Thanks for your time!
