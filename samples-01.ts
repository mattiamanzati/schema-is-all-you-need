import * as Schema from "@effect/schema/Schema"

export const Todo = Schema.Struct({
  id: Schema.Number,
  name: Schema.String,
  isCompleted: Schema.Boolean,
  completedAt: Schema.Date
})
/* ^? Schema.Struct<{
    id: typeof Schema.Number;
    name: typeof Schema.String;
    isCompleted: typeof Schema.Boolean;
    completedAt: typeof Schema.Date;
}> */

export type Todo = Schema.Schema.Type<typeof Todo>
// ^? { id: number; name: string; isCompleted: boolean; completedAt: Date; }