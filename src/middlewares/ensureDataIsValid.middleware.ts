import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";


export const ensureDataIsValidmiddleware = (shema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => {
    
    const validateData = shema.parse(req.body);

    
    req.body = validateData
    
    return next
}