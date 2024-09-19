import * as z from "zod"

const Todo = z.object({
    id: z.number(),
    name: z.string(),
    isCompleted: z.boolean(),
    createdAt: z.string().datetime()
})

export type Todo = z.infer<typeof Todo>
/* ^? 
type Todo = {
    id: number;
    name: string;
    isCompleted: boolean;
    createdAt: string;
}
    */