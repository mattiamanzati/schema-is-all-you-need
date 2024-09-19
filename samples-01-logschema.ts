import * as Schema from "@effect/schema/Schema"

export const Todo = Schema.Struct({
  id: Schema.Number,
  name: Schema.String,
  isCompleted: Schema.Boolean,
  completedAt: Schema.Date
})

export type Todo = Schema.Schema.Type<typeof Todo>

console.log(Todo.ast)