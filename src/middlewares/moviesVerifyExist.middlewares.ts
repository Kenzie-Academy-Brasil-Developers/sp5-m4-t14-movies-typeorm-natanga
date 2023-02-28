import { NextFunction, Request, Response } from "express";

export const moviesVerifyExist = (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {



    return next()
}