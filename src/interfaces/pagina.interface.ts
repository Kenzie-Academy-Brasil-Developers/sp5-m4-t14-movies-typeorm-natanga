import { Movie } from "../entities";
import { iMoviesArray } from "./movies.Interface";

export interface IPagination {
    prevPage: string | null,
    nextPage: string | null,
    count: number | null,
    data: iMoviesArray
}