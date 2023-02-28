import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { Movie } from '../entities';
import { iMovies, iMoviesRequest } from "../interfaces/movies.Interface";


export const createMoviesService = async (dataMovies: iMoviesRequest): Promise<iMovies> => {

    const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

    const movie = movieRepository.create(dataMovies);

    await movieRepository.save(movie);

    return movie
}