import { z } from 'zod';
import { moviesSchema, requestMoviesSchema } from '../schemas/movies.schema'

export type iMovies = z.infer<typeof moviesSchema>

export type iMoviesResponse = z.infer<typeof requestMoviesSchema>