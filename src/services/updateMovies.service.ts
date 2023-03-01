import { iMovies, iMovieUpdate } from "../interfaces/movies.Interface";
import { Repository } from 'typeorm';
import { Movie } from '../entities';
import { AppDataSource } from "../data-source";

export const updateMoviesService = async (moviesData: iMovieUpdate, idMovie: number): Promise<iMovies> => {

    const moviesRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

    const oldUser = await moviesRepository.findOneBy({
        id: idMovie
    })

    const movie = await moviesRepository.save({
        ...oldUser,
        ...moviesData
    })


    return movie

}