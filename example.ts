import * as Schema from "@effect/schema/Schema"
import * as Arbitrary from "@effect/schema/Arbitrary"
import * as FastCheck from "@effect/schema/FastCheck"
import * as JSONSchema from "@effect/schema/JSONSchema"

const Todo = Schema.Struct({
    id: Schema.Int.pipe(Schema.positive()),
    name: Schema.String.pipe(Schema.nonEmptyString()).annotations({ description: "The job that needs to be done" }),
    isCompleted: Schema.Boolean,
    createAt: Schema.Date.annotations({ jsonSchema: { type: "string", format: "date-time" } }).annotations({ description: "The date given when the api accepted this todo" })
}).annotations({ identifier: "Todo" })

const jsonSchema = JSONSchema.make(Todo)
console.log(JSON.stringify(jsonSchema, null, 2))
