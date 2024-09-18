import * as Schema from "@effect/schema/Schema"
import * as FastCheck from "@effect/schema/FastCheck"
import * as Arbitrary from "@effect/schema/Arbitrary"

const User = Schema.Struct({
  id: Schema.Int,
  name: Schema.String,
  birthday: Schema.Date
}).annotations({ identifier: "User" })

const ArbitraryUser = Arbitrary.make(User)

console.log(FastCheck.sample(ArbitraryUser, 2))