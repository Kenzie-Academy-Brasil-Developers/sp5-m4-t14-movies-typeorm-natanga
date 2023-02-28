import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from '../errors';

export const moviesVerifyExistbyName = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const movieRopository: Repository<Movie> = AppDataSource.getRepository(Movie);

    const findMovie = await movieRopository.findOne({
        where: {
            name:req.body.name
        }
    })
    
    if (findMovie) {
        throw new AppError("Movie already exists.",409)
    }
    
    return next()
}