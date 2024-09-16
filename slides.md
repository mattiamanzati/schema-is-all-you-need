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
layout: image
image: /image-cover.jpeg
---


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

# Today's agenda


---
layout: fact
---

# We ❤️ TS 

<!--
I do not need to convince you that types are great.
Maybe we took few years to realize that, but thanks to tools like TypeScript that brought a type system into JavaScript, we were able to step up our codebases and finally build production grade applications in JavaScript.

And the more the typings are well written and strict, the more our code becames robust, and we can develop our application based on some assumptions of how data is defined.
-->

---
layout: fact
---

# The outside world is scary

<!--
Unfortunately eventually we reach a point were we cannot make strict type definitions anymore.
They eventually have to reach the outside world for data, and as soon we do that, every assumption made while defining our strict types at compile time goes away.
And this is not restricted to interacting with network APIs, this applies as well when you have to fetch data back from some kind of storage.

Even though we may manage the storage of our application ourself, are we sure that the data we persist has'nt been corrupted or is somehow incompatible with our newest application update?
-->

---

# Data Validation Libraries

<!--
To solve this problem we have a lot of libraries like zod and others that solve this problem.
Given any unknown data that may come from the wire or the storage, they perform validation and ensure the shape of the data is exactly the one we expect.
Sure those are an additional dependency, but they make our application definetely more robust and less prone to fail due to malformed inputs.
-->

---

# Here's zod

<!--
So here it is our updated example, you'll notice that to avoid defining twice the shape of the data most of validation libraries take advantage of TypeScript's infer to derive the typescript types from a runtime definition.
And that is because to perform validation we need a runtime function to do that, and since typescript's type get compiled away, we need to use a javascript value as source of defining the data shape.
-->
---

# Encoding back

<!--
So what happens now that we have validated our incoming API data?
Seems odd, but most of the time you fetch something from the storage, you'll have eventually to write it back into persistence with updated data.

And unfortunately, that is out of scope for most data validation libraries. They only focus on input validation!
-->
---

# Manual encoding

<!--
So zod won't be of any help here, we need to write additional code that given our data, produces back something that's accepted by our storage or APIs.
Ok, now that's not clean and small code as we had before, but hey, it works! So why should we bother about it?
-->
---

# Ensuring output is still valid

DB -> parse -> Todo -> encode -> Todo

<!--
Well, maybe we should care about it.
If we are reading data from the storage, updating it, and then encoding it back, we need to ensure that given any data, we are able to persist it again.
This may seem trivial, but we basically have added a cost of defining manually a function, and always ensure that for any value we can encode it, and given the output validate it back again ensuring that the output is the same as the initial input.
This function is one of the critical point of our application, doing it wrong may result in unexpected user data loss.
-->
---

# Property based testing

<!--
And guess what? 
One way of being sure that we succefully implemented that encode function for every value is through something called "property based testing", where instead of testing a function with a given user value, we describe the properties we expect from that encode function.
Defining the property we want is pretty easy, we want that given User value we are able to encode it, and then restore it again from the encoded version.
But to do that we need to tell the property based testing framework how to generate valid user objects.
-->

---

# This does not end here
- JSONSchema
- Assertions

<!--
We're stuck in a loop. To safely parse and encode back data, we need information about how data is structured.
And there may be other requirements as well, let's say our app exposes some REST APIs, ho we may create the JSON schemas for the input of our APIs?
This whole mess is kinda absurd, because we know how the data is shaped, so dont you feel that maybe there's a better way to solve this rather then repeating ourself twenty times?





-- AST
Let's go back to the drawing board.
The problem here is the way we defined our data structure.
Sure, we can't use TypeScript anymore since we now need to perform stuff at validation, but how do we do it?

Turns out the solution was always just under our nose.
What if instead of creating a solution specific for validation/encoding/arbitraries and json schema we instead focus on defining a runtime something that can be described by a TypeScript's type?

-- the problem with validate
They focus on ensuring an input value, which most of library defaulted to unknown, and turn it into a structure defined at runtime, but they miss completely turning it back to the input type.
Let's have a look at the type signature of a function that validates our data that comes from the wire.
Most of validation libraries out there focus on starting from something unknown and turning it into our data structure.

-- effect schema

Effect schema does both, encoding and decoding, and this sets it apart from other libraries.

What does it mean? Let's take an example, let's say you have some structured string, just read from a file, like a json string, and you are able to turn it into a data structure by just calling JSON.parse; an array, an object.



-->

---
layout: fact
---

## Happy Effect-ing!
Thanks for your time!
