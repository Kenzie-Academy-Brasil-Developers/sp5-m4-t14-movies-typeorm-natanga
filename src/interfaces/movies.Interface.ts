import { z } from 'zod';
import { movieSchema, multiplesMovies, movieCreateSchema, responseMovieSchema } from '../schemas/movies.schema'
import { DeepPartial } from 'typeorm';

export type iMovies = z.infer<typeof movieSchema>

export type iMoviesRequest = z.infer<typeof movieCreateSchema>

export type iMoviesResponse = z.infer<typeof responseMovieSchema>

export type iMovieUpdate = DeepPartial<iMovies>

export type iMoviesArray = z.infer<typeof multiplesMovies>

