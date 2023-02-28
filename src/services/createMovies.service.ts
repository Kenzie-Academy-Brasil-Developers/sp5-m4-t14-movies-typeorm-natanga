import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { Movie } from '../entities';
import { iMoviesRequest, iMoviesResponse } from "../interfaces/movies.Interface";
import { responseMovieSchema } from '../schemas/movies.schema';

export const createMoviesService = async (dataMovies: iMoviesRequest): Promise<iMoviesResponse> => {

    const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

    const movie = movieRepository.create(dataMovies);

    await movieRepository.save(movie);

    const newMovie = responseMovieSchema.parse(movie);

    return newMovie
}