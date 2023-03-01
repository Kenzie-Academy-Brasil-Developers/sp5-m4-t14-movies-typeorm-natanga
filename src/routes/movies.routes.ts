import { Router } from 'express';
import { moviesVerifyExistbyId } from '../middlewares/moviesVerifyExistbyId.middlewares';
import { moviesVerifyExistbyName } from '../middlewares/moviesVerifyExistbyName.middlewares';
import { ensureDataIsValidmiddleware } from '../middlewares/ensureDataIsValid.middleware'
import { createMoviesControlers, deleteMoviesControlers, listMoviesControlers, updateMoviesControlers } from './../controllers/movies.controlers';
import { movieCreateSchema, movieSchemaUpdate } from '../schemas/movies.schema';

const movieRoutes: Router = Router()

movieRoutes.post('', moviesVerifyExistbyName, ensureDataIsValidmiddleware(movieCreateSchema), createMoviesControlers)
movieRoutes.patch('/:id', moviesVerifyExistbyId, moviesVerifyExistbyName, ensureDataIsValidmiddleware(movieSchemaUpdate), updateMoviesControlers)
movieRoutes.get('', listMoviesControlers)
movieRoutes.delete('/:id', moviesVerifyExistbyId, deleteMoviesControlers)



export default movieRoutes