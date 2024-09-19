import * as z from "zod"

const Todo = z.object({
    id: z.number(),
    name: z.string(),
    isCompleted: z.boolean(),
    createdAt: z.date()
})

export type Todo = z.infer<typeof Todo>

export function encode(todo: Todo){
    return {
        id: todo.id,
        name: todo.name,
        isCompleted: todo.isCompleted,
        createdAt: todo.createdAt.toString() // <- BUG!
    }
}