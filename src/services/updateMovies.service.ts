import { iMovies, iMoviesResponse, iMovieUpdate } from "../interfaces/movies.Interface";
import { Repository } from 'typeorm';
import { Movie } from '../entities';
import { AppDataSource } from "../data-source";
import { responseMovieSchema } from "../schemas/movies.schema";

export const updateMoviesService = async (moviesData: iMovieUpdate,idMovie:number): Promise<iMoviesResponse> => {

    const moviesRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

    const oldUser = await moviesRepository.findOneBy({
        id: idMovie
    })

    const movie = moviesRepository.create({
        ...moviesData,
        ...oldUser
    })

    await moviesRepository.save(movie)

    const updateMovie = responseMovieSchema.parse(moviesRepository)

    return updateMovie

}