
import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { Movie } from '../entities';

export const deleteMoviesService = async (idMovie: number): Promise<void> => {
    
    const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

    const movie = await movieRepository.find({
        where: {
            id:idMovie
        }
    })

    await movieRepository.remove(movie!)

}