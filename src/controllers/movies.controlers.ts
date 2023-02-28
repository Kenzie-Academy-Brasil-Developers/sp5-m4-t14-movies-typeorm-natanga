import { Request, Response } from "express";
import { movieCreateSchema } from "../schemas/movies.schema";
import { iMoviesRequest, iMovies } from '../interfaces/movies.Interface'
import { createMoviesService } from "../services/createMovies.service";
import { listMoviesService } from "../services/listMovies.service";
import { deleteMoviesService } from "../services/deleteMovies.service";
import { IPagination } from './../interfaces/pagina.interface';

export const createMoviesControlers = async (req: Request, res: Response): Promise<Response> => {

    const dataMovies: iMoviesRequest = movieCreateSchema.parse(req.body)

    const newMovie: iMovies = await createMoviesService(dataMovies)

    return res.status(201).json(newMovie)
}

export const listMoviesControlers = async (req: Request, res: Response): Promise<Response> => {

    const { page, perPage, sort, order } = req.query

    const movies: IPagination = await listMoviesService(page, perPage, sort, order)

    return res.status(200).json(movies)
}

export const updateMoviesControlers = async (req: Request, res: Response): Promise<Response> => {
    //   const movieSchema =    updateMoviesService()
    return res.status(200).json()
}

export const deleteMoviesControlers = async (req: Request, res: Response): Promise<Response> => {

    await deleteMoviesService(parseInt(req.params.id))

    return res.status(204).json()
}
