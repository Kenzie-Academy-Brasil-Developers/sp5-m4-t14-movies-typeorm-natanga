import { Router } from "express";
import { moviesVerifyExistbyId } from "../middlewares/moviesVerifyExistbyId.middlewares";
import { moviesVerifyExistbyName } from "../middlewares/moviesVerifyExistbyName.middlewares";
import { createMoviesControlers, deleteMoviesControlers, listMoviesControlers, updateMoviesControlers } from './../controllers/movies.controlers';

const movieRoutes: Router = Router()

movieRoutes.post('', moviesVerifyExistbyName, createMoviesControlers)
movieRoutes.patch('/:id',moviesVerifyExistbyId, updateMoviesControlers)
movieRoutes.get('', listMoviesControlers)
movieRoutes.delete('/:id', moviesVerifyExistbyId, deleteMoviesControlers)



export default movieRoutes