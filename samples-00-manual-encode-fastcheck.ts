import * as fc from "fast-check"

const ArbitraryTodo = fc.record({
    id: fc.integer(),
    name: fc.string(),
    isCompleted: fc.boolean(),
    createdAt: fc.date()
})

const randomTodos = fc.sample(ArbitraryTodo, { seed: 42 })

for(const todo of randomTodos){
    const encodedTodo = encode(todo)
    const decodedTodo = decode(encodedTodo)
    expect(decodedTodo).toEqual(todo)
}