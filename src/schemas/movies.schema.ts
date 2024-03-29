import { z } from 'zod'


export const movieSchema = z.object({
    id: z.number(),
    name: z.string().min(2).max(50),
    description: z.string().optional().nullable(),
    duration: z.number().positive().int(),
    price: z.number().int(),
});

export const movieCreateSchema = movieSchema.omit({
    id: true,
})

export const multiplesMovies = movieSchema.array()

export const movieSchemaUpdate = movieSchema.partial()