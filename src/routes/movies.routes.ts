import { Router } from "express";
import { moviesVerifyExistbyId } from "../middlewares/moviesVerifyExistbyId.middlewares";
import { createMoviesControlers, deleteMoviesControlers, listMoviesControlers } from './../controllers/movies.controlers';

const movieRoutes: Router = Router()

movieRoutes.post('', createMoviesControlers)
movieRoutes.patch('/:id',)
movieRoutes.get('',listMoviesControlers)
movieRoutes.delete('/:id', moviesVerifyExistbyId, deleteMoviesControlers)



export default movieRoutes