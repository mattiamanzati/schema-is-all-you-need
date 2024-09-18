import * as Schema from "@effect/schema/Schema"

export const User = Schema.Struct({
  id: Schema.Number,
  name: Schema.String
})
/* ^? Schema.Struct<{
    id: typeof Schema.Number;
    name: typeof Schema.String;
    birthday: typeof Schema.Date;
}> */

export type User = Schema.Schema.Type<typeof User>
// ^? { id: number, name: string }