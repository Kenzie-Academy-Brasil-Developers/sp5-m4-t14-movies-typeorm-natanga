import { z } from 'zod';
import { movieSchema, multiplesMovies, requestMovieSchema, responseMovieSchema } from '../schemas/movies.schema'
import { DeepPartial } from 'typeorm';

export type iMovies = z.infer<typeof movieSchema>

export type iMoviesRequestt = z.infer<typeof requestMovieSchema>
export type iMoviesRequest = DeepPartial<iMoviesRequestt>

export type iMoviesResponse = z.infer<typeof responseMovieSchema>

export type iMovieUpdate = DeepPartial<iMovies>

export type iMoviesArray= z.infer<typeof multiplesMovies>