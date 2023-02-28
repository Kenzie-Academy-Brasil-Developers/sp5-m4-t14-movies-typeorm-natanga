import { z } from 'zod'


export const movieSchema = z.object({
    id: z.number(),
    name: z.string().min(2).max(50),
    description: z.string().nullable(),
    duration: z.number(),
    price: z.number(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    deletedAt: z.string().nullable().optional(),
});

export const movieCreateSchema = movieSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    deletedAt: true
})

export const responseMovieSchema = movieSchema.omit({
    createdAt: true,
    updatedAt: true,
    deletedAt: true
})

export const multiplesMovies = responseMovieSchema.array()