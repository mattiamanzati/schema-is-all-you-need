import * as Schema from "@effect/schema/Schema"
import * as AST from "@effect/schema/AST"

export const User = Schema.Struct({
  id: Schema.Number,
  name: Schema.String,
  birthday: Schema.Date
})

export type User = Schema.Schema.Type<typeof User>
