import * as Schema from "@effect/schema/Schema"
import * as JSONSchema from "@effect/schema/JSONSchema"
import * as AST from "@effect/schema/AST"

const Todo = Schema.Struct({
    id: Schema.Number,
    name: Schema.String,
    isCompleted: Schema.Boolean
}).annotations({ identifier: "Todo" })

type Todo = Schema.Schema.Type<typeof Todo>
type TodoEncoded = Schema.Schema.Encoded<typeof Todo>

const go = (ast: AST.AST) => {
    switch(ast._tag){
        case "NumberKeyword": 
        case "BooleanKeyword":
        case "StringKeyword":
        return (a, b) => a === b
        case "TypeLiteral":
            return (a, b) => ast.propertySignatures.every(propertySignature => go(propertySignature.type)(a[propertySignature.name], b[propertySignature.name]))
    }
    throw ast._tag
}

const equal = go(Todo.ast)({ id: 1, name: "b"}, {id: 1, name: "a"})
console.log(equal)