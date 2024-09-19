import * as Schema from "@effect/schema/Schema"

const Todo = Schema.Struct({
  id: Schema.Number,
  name: Schema.String
})

const decodeTodo = Schema.decodeUnknownEither(Todo)
/* ^? (u: unknown, overrideOptions?: ParseOptions) => Either<{
    readonly id: number;
    readonly name: string;
}, ParseError> */

const successTodo = decodeTodo({ id: 1, name: "Buy milk"}) 
// ^? {_tag: "Right", right: { id: 1, name: "Buy milk"} }

const failureTodo = decodeTodo({ id: 2, name: true })
console.log("failureTodo", failureTodo)
// ^? {_tag: "Left", left: { message: "...", ... }