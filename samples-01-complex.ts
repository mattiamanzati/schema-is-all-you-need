import * as Schema from "@effect/schema/Schema"
import * as Effect from "effect/Effect"

const SignupData = Schema.Struct({
    name: Schema.String.pipe(Schema.nonEmptyString()),
    surname: Schema.String.pipe(Schema.nonEmptyString()),
    password: Schema.String.pipe(Schema.minLength(6), Schema.nonEmptyString()),
    passwordRepeat: Schema.String
}).pipe(
    Schema.filter(
        data => data.password === data.passwordRepeat,
        { message: () => "passwords should match"}
    )
).annotations({ identifier: "Signup"})

const decode = Schema.decodeUnknownSync(SignupData)

decode({
    name: "Mattia",
    surname: "Manzati",
    password: "Hello!",
    passwordRepeat: "Hello."
})