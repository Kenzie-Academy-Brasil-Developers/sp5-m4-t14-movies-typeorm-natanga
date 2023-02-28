import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from '../errors';

export const moviesVerifyExistbyId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    if (!req.params.id) {
        throw new AppError("the id of the movie is missing", 400);
    }

    const movieRopository: Repository<Movie> = AppDataSource.getRepository(Movie);

    const findMovie = await movieRopository.findOne({
        where: {
            id:parseInt(req.params.id)
        }
    })

    if (!findMovie) {
        throw new AppError('Movie Not Found',404)
    }

    return next()
}