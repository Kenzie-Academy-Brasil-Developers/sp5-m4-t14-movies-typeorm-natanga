import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Movie } from "../entities"
import { iMovies, iMoviesArray } from "../interfaces/movies.Interface";
import { multiplesMovies } from "../schemas/movies.schema";

export const listMoviesService = async () => {

    const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

    const findMovies: iMovies[] = await movieRepository.find()

    const movies: iMoviesArray = multiplesMovies.parse(findMovies)

    return movies

}