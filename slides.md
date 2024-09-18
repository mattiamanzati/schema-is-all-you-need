---
theme: default
class: text-center
lineNumbers: false
info: Mattia Manzati
drawings:
  persist: false
transition: fade
title: A Schema is all you need!
mdc: true
download: true
canvasWidth: 850
layout: image
image: /image-cover.jpeg
monacoTypesAdditionalPackages:
  - effect
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

Our application eventually may reach the outside world for data, and as soon we do that, every assumption made while defining our strict types at compile time goes away.

And this is not restricted to interacting with network APIs, this applies as well when you have to fetch data back from some kind of storage.

Even though we may manage the storage of our application ourself, are we sure that the data we persist has'nt been corrupted or is somehow incompatible with our newest application update?
-->

---

# Data Validation Libraries

<!--
A lot of libraries exists out there to solve this problem, let's say zod for example.

Given any unknown data that may come from the wire or the storage, they perform validation and ensure the shape of the data is exactly the one we expect.

Sure those libraries are an additional dependency, but they make our application definitely more robust and less prone to failures due to malformed inputs.
-->

---

# Here's zod

<!--
So let's say you decide to use zod, now your code will look like something like this.

You'll notice that to avoid defining twice the shape of the data most of validation libraries take advantage of TypeScript's infer to derive the typescript types from a runtime definition.

And that is because to perform validation we need a runtime function to do that, and since typescript's type get compiled away, we need to use a javascript value as source of defining the data shape.
-->

---

# Encoding back

<!--
So what happens now that we have validated our incoming API data?

Seems odd, but most of the time you fetch something from the storage, you'll have eventually to write it back with updated data.

Let's just think at all of those edit screens in our application where the user fetches for a resources, changes a field, and saves it back.

-->

---

# Manual encoding

<!--
Unfortunately, performing encoding is out of scope for most data validation libraries. 
Sure, they only focus on input validation!

So we need to write additional code that given our data, produces back something that has the shape accepted by our storage or APIs.

Now the resulting code won't be clean and small code as before, but hey, it works! So why should we bother about it?
-->
---

# Ensuring output is still valid

DB -> parse -> Todo -> encode -> Todo

<!--
Well, maybe we should care about it.

If we are reading data from the storage, updating it, and then encoding it back, we need to ensure that given any data, we are able to persist it again.

This may seem trivial, but we basically have added a cost of defining manually a function that performs the same work of validation but in the other way back.

This function is one of the critical point of our application, doing it wrong may result in unexpected user data loss.
-->

---

# Property based testing

<!--
One way of being sure that we succefully implemented that encode function is through something called "property based testing", where instead of testing a function with a given user value, we describe the properties we expect from that encode function.

Defining the property we want is pretty easy, we want that given User value we are able to encode it, and then restore it again from the encoded version.

But unfortunately to use property based testing frameworks we need to instruct them how to generate valid user objects in the first place.
-->

---

# This does not end here
- JSONSchema
- Assertions

<!--
We're stuck in a loop. 

To safely test and be sure that we can parse and encode back data, we need information about how data is structured.

This whole mess is kinda absurd, because we know how the data is shaped, so dont you feel that maybe there's a better way to solve this rather then repeating ourself three or even more times?
-->

---

# One definition to rule them all

```ts
interface User{
  id: number
  name: string
  birthday: Date
}
```

<!--
Let's go back to the drawing board.

The problem here is that we are basically considering three problems related to data as three complitely different problems, each one solved by a different library.

So maybe we should move to a schema-centric definition, and derive everything from that?
-->

---

```ts
parse<User>({id: 1, name: "Mattia"})
```

<!--
It would be kind-awesome to be able to directly use and inspect our types, but again we can't as they get removed upon compilation.

We need to construct some kind of value, like an object, that can be used instead of our type.

The problem here becomes how can we encode such data structure, there may be thousand of types out there, but turns out the solution was always just under our nose.
-->

---

<!--
Our applications are built in TypeScript, so our objective is being able to fully describe with a runtime value a TypeScript type right?

So maybe we should just use the same structure as TypeScript's AST to define internally our schema!
-->

---

<!--
And this is exactly the key point that makes in my opinion @effect/schema the best solution for defining and using schemas in TypeScript.

Effect/schema instead of focusing on a particular problem around data, provides you with both the API to defines schemas and interpreters that will allow you to create decoding, encoding, arbitraries, json schemas and more all starting from your schema definition!
-->

---

<!--
Effect schema has been written by Giulio Canti, an amazing guy that has already worked in the past on libraries focused around data decoding/encoding.

You may already have heard of tcomb or io-ts right?

Well @effect/schema can be considered kinda of the successor of those libraries.
-->

---

```ts
import * as Schema from "@effect/schema/Schema"

const User = Schema.Struct({
  id: Schema.Number,
  name: Schema.String
})
```

<!--
Let's start with a pretty simple example to see effect/schema in action.

As you can see the APIs are pretty simple, we define the User schema by providing the set of properties and for each property we pass in the type we expect at that property.

Exactly as other libraries, you can then use the Schema.Type utility to get the inferred type for our data structure. And use it in your code.
-->

---

```ts {monaco-run}
import * as Schema from "@effect/schema/Schema"

const User = Schema.Struct({
  id: Schema.Number,
  name: Schema.String
})

console.log(User.ast)
```

<!--
So you may say where's the difference? 

If we try to log the value of our schema at runtime, you'll see that there is no validate or encode function in there, there is just an AST and few annotations!

This produces really clean and lightweight APIs that can be composed very easily!

And now how we go from this value to an actual function that validates our input?
-->

---

<<< ./samples-02-decode.ts {monaco}

<!--
That's easy, we call an interpreter that given our schema, produces a validator function!

This interpreter will traverse the AST and construct the validator function using the data of the AST and the annotations.

This function can then be called with your input data and will either produces a correct result or throw in case of error, just like any other data validation library.
-->

---

<<< ./samples-02-decode-fp.ts {monaco-run}

<!--
If you are a functional guy and did'nt like what I just said, forget it!

Effect Schema includes also interpreters that creates a function that instead of throwing returns an Either of a success or a failure.

That way you can create robust applications exceptions free.
-->

---

<<< ./samples-03-decode.ts {monaco-run}

<!--
The errors raised while decoding are inspectable and customizable as well!

Remember those annotations? Any schema type can be annotated with custom values, and any interpreter, like the decoding one, can use those values to provide custom experiences!

Here for example we can see that by providing an identifier annotation, the error message changes from printing the structure it expects to printing "User"!
-->

---
layout: fact
---

## `(input: unknown) => User`
<br/>

## `(input: User) => unknown`

<!--
We've seen so far how easy is to turn an input such as unknown and turn it into our validated user, but what about the way back?
And that's the problem most of other libraries have, they dont allow turning data back.
And that's where effect schema shines.
But turning something into unknown is'nt quite usefull right?
-->
---
layout: fact
---

## `Schema<A, E>`

<!--
And that's why Schema has a second type parameter that we call the "encoded" type.
Let's take a real world example. Let's say that our User has also a birthday field which is a date.
How is that date fetched from the APIs or storage? A date is not a JSON primitive so it is likely it is encoded as something else on the wire, and then transformed into a date.
-->
---

## unknown =(assert)=> string =(decode)=> Date

<!--
If we take a look at the type definition for the Schema.Date well' see Schema<Date, string>.
That means that the field will be decoded from and encoded back as a string, but upon a successful decoding well get it as a Date.
So the job that those decodeUnknownSync APIs do is'nt really just validating the input.
What they actually do is first assert that the input is of the encoded type we expected,
and then they decode a Date starting from the input string just asserted.
All of this thanks to Schema's AST.
-->
---

## unknown <=(assert)= string <=(encode)= Date
## string <=(encode)= Date

<!--
And this has some quite useful applications.
Let's revert the operations, and see what we can do.
This means we can just encode back our Date into its original string!
-->

---

<!--
And this is the general rule of schemas.
They should be defined such as that encoding a value and then decoding from the result, results into the initial value.
This is exactly the property we discussed of ensuring that we don't lose data while fetching and putting back data into our storage.
-->

---

<!--
The list of combinators provided by schema is quite big and complete, so in my opinion it's not worth having a look at all of them,
but the documentation is comprehensive and includes all of you can think of.
-->

---

<!--
But again, schemas are not just for encoding and decoding values.
We can also for example derive arbitraries from a schema!
To do that, we need to first convert the schema into a FastCheck arbitrary, and then we can use fastcheck sample to get as many random samples we want!
This is very useful to seed our databases with random data!
And you can imagine that the more you make your schema definitions precise, the more the data will be like a real one!
-->

---

<!--
Imagine you use schema to validate input and output of your HTTP APIs, would'nt be nice to generate JSON schemas for the data you expect as input and produce as output so that third party clients can use that to generate clients?
Well imagine no more because you can!
-->

---
layout: fact
---

## Happy Schem-ing!
Thanks for your time!
