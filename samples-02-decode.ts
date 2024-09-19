import * as Schema from "@effect/schema/Schema"

const Todo = Schema.Struct({
  id: Schema.Number,
  name: Schema.String
})

const decodeTodoOrThrow = Schema.decodeUnknownSync(Todo)
/* ^? (u: unknown) => {
    readonly id: number;
    readonly name: string;
} */

const firstTodo = decodeTodoOrThrow({ id: 1, name: "Buy milk"}) // decode successfully
console.log("firstTodo", firstTodo)

const secondTodo = decodeTodoOrThrow({ id: 2, name: true }) // throws