import { z } from 'zod'


export const movieSchema = z.object({
    id: z.number(),
    name: z.string().min(2).max(50),
    description: z.string().nullable(),
    duration: z.number(),
    price: z.number(),
});

export const movieCreateSchema = movieSchema.omit({
    id: true,
})

export const multiplesMovies = movieSchema.array()