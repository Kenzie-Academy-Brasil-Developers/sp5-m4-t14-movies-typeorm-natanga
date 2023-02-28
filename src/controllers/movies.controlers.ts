import { Request, Response } from "express";

const createMoviesControlers = async (req: Request, res: Response): Promise<Response> => {

    return res.status(201).json()
}

const listMoviesControlers = async (req: Request, res: Response): Promise<Response> => {

    return res.status(200).json()
}
const updateMoviesControlers = async (req: Request, res: Response): Promise<Response> => {

    return res.status(200).json()
}
const deleteMoviesControlers = async (req: Request, res: Response): Promise<Response> => {

    return res.status(200).json()
}
