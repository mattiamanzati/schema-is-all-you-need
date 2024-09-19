import * as Schema from "@effect/schema/Schema"
import * as JSONSchema from "@effect/schema/JSONSchema"

const Todo = Schema.Struct({
  id: Schema.Int,
  name: Schema.String,
  isCompleted: Schema.Boolean,
  createdAt: Schema.Date.annotations({jsonSchema: { type: "string", format: "date-time"}})
}).annotations({ identifier: "Todo" })

const finalSchema = JSONSchema.make(Todo)

console.log(JSON.stringify(finalSchema, null, 2))