import * as Schema from "@effect/schema/Schema"

const User = Schema.Struct({
  id: Schema.Number,
  name: Schema.String
})

const parseUser = Schema.decodeUnknownEither(User)
/* ^? (u: unknown, overrideOptions?: ParseOptions) => Either<{
    readonly id: number;
    readonly name: string;
}, ParseError> */

const mattia = parseUser({ id: 1, name: "Mattia"}) 
// ^? {_tag: "Right", right: { id: 1, name: "Mattia"} }

const error = parseUser({ id: 2, name: true })
console.log("error", error)