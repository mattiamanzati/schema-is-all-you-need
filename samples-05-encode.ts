import * as Schema from "@effect/schema/Schema"

const Todo = Schema.Struct({
  id: Schema.Number,
  name: Schema.String,
  isCompleted: Schema.Boolean,
  createdAt: Schema.Date
}).annotations({ identifier: "Todo" })

const encodeTodo = Schema.encodeEither(Todo)

const encodedTodo = encodeTodo({ id: 2, name: "Buy milk", isCompleted: false, createdAt: new Date() })

if(encodedTodo._tag === "Left"){
    console.error(encodedTodo.left.message)
}else{
    console.log("success", encodedTodo.right)
}