import * as Schema from "@effect/schema/Schema"

const User = Schema.Struct({
  id: Schema.Number,
  name: Schema.String
}).annotations({ identifier: "User" })

const parseUser = Schema.decodeUnknownEither(User)

const parsedUser = parseUser({ id: 2, name: true })

if(parsedUser._tag === "Left"){
    console.log("error", parsedUser.left.message)
}else{
    console.log("success", parsedUser.right)
}