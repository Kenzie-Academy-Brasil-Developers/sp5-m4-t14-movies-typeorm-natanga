import { Request, Response } from "express";
import { movieCreateSchema } from "../schemas/movies.schema";
import { iMovies, iMoviesArray, iMoviesRequest, iMoviesResponse } from '../interfaces/movies.Interface'
import { createMoviesService } from "../services/createMovies.service";
import { listMoviesService } from "../services/listMovies.service";
import { deleteMoviesService } from "../services/deleteMovies.service";

export const createMoviesControlers = async (req: Request, res: Response): Promise<Response> => {

    // const dataMovies: iMoviesRequest = movieCreateSchema.parse(req.body)

    // const newMovie: iMoviesResponse = await createMoviesService(dataMovies)

    // return res.status(201).json(newMovie)
     return res.status(201).json()
}

export const listMoviesControlers = async (req: Request, res: Response): Promise<Response> => {

    const limit = req.params

    console.log(limit);
    
    const movies: iMoviesArray= await listMoviesService()

    return res.status(200).json(movies)
}

export const updateMoviesControlers = async (req: Request, res: Response): Promise<Response> => {

    return res.status(200).json()
}

export const deleteMoviesControlers = async (req: Request, res: Response): Promise<Response> => {

    await deleteMoviesService(parseInt(req.params.id))

    return res.status(204).json()
}
