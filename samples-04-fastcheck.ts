import * as Schema from "@effect/schema/Schema"
import * as FastCheck from "@effect/schema/FastCheck"
import * as Arbitrary from "@effect/schema/Arbitrary"

const Todo = Schema.Struct({
  id: Schema.Int,
  name: Schema.String,
  isCompleted: Schema.Boolean,
  createdAt: Schema.Date
}).annotations({ identifier: "Todo" })

const ArbitraryTodo = Arbitrary.make(Todo)

console.log(FastCheck.sample(ArbitraryTodo, 2))