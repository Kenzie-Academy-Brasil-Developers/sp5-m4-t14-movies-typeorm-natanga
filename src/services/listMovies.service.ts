import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Movie } from "../entities"
import { iMoviesArray } from "../interfaces/movies.Interface";
import { multiplesMovies } from "../schemas/movies.schema";

export const listMoviesService = async (pageReq: any, perPageReq: any, sortReq: any, orderReq: any) => {

    const queryPage: number | undefined = Number(pageReq)
    const queryPerPage: number | undefined = Number(perPageReq)

    let page: number = queryPage !== undefined && queryPage > 1 ? queryPage : 1
    const perPage: number = queryPerPage !== undefined && queryPerPage > 0 && queryPerPage <= 5 ? queryPerPage : 5

    const baseUrl: string = `http://localhost:3000/movies`
    const prevPage: string | null = page - 1 < 1 ? null : `${baseUrl}?page=${page - 1}&perPage=${perPage}`
    const calculyNextPage: string | undefined = page + 1 >= 2 ? `${baseUrl}?page=${page + 1}&perPage=${perPage}` : `${baseUrl}?page=${page + 2}&perPage=${perPage}`

    const keysShort: string[] = ['id', 'name', 'description', 'duration', 'price', 'createdAt', 'updatedAt', 'deletedAt']
    const keysOrder: string[] = ['ASC', 'DESC']

    const sort: string = sortReq && keysShort.includes(String(sortReq)) ? String(sortReq) : "id"
    const order: string = orderReq && keysOrder.includes(String(orderReq)) ? String(orderReq) : "ASC"

    const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);
    
    const findMovies: [Movie[], number] = await movieRepository.findAndCount({
        take: perPage,
        skip: perPage * (page - 1),
        order: {
            [sort]: order
        }
    })

    const findNextMovies: Movie[] = await movieRepository.find({
        take: perPage,
        skip: perPage * (page + 1)
    })

    const movies: iMoviesArray = multiplesMovies.parse(findMovies[0])

    let nextPage: string | null = null;

    if (findNextMovies.length > 0) {
        nextPage = calculyNextPage;
    }

    const pagination = {
        prevPage,
        nextPage,
        count: findMovies[1],
        data: movies
    }


    return pagination

}