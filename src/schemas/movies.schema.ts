import { z } from 'zod'

export const moviesSchema = z.object({
    id: z.number(),
    name: z.string().min(2).max(50),
    duration: z.number(),
    price: z.number(),
    createAt: z.string(),
    updateAt: z.string(),
    deletedAt: z.string().optional()
})

export const requestMoviesSchema = moviesSchema.omit({
    id: true,
    createAt: true,
    updateAt: true,
    deletedAt: true
})