import * as Schema from "@effect/schema/Schema"

const User = Schema.Struct({
  id: Schema.Number,
  name: Schema.String
})

const parseUserOrThrow = Schema.decodeUnknownSync(User)
/* ^? (u: unknown) => {
    readonly id: number;
    readonly name: string;
} */

const mattia = parseUserOrThrow({ id: 1, name: "Mattia"}) // parses successfully
const error = parseUserOrThrow({ id: 2, name: true }) // throws