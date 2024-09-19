import * as Schema from "@effect/schema/Schema"

const Todo = Schema.Struct({
  id: Schema.Number,
  name: Schema.String
}).annotations({ identifier: "Todo" })

const decodeTodo = Schema.decodeUnknownEither(Todo)

const decodedTodo = decodeTodo({ id: 2, name: true })

if(decodedTodo._tag === "Left"){
    console.error(decodedTodo.left.message)
}else{
    console.log("success", decodedTodo.right)
}