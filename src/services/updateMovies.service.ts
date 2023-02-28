import { iMovies, iMoviesResponse } from "../interfaces/movies.Interface";
import { Repository } from 'typeorm';
import { Movie } from '../entities';
import { AppDataSource } from "../data-source";
import { responseMovieSchema } from "../schemas/movies.schema";
import { iMovieUpdate } from "../__tests__/interfaces";

export const updateMoviesService = async (moviesData: iMovieUpdate): Promise<iMoviesResponse> => {

    const moviesRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

    const oldUser = await moviesRepository.findOneBy({
        id: moviesData.id
    })

    const movie = moviesRepository.create({
        ...moviesData,
        ...oldUser
    })

    await moviesRepository.save(movie)

    const updateMovie = responseMovieSchema.parse(moviesRepository)

    return updateMovie

}