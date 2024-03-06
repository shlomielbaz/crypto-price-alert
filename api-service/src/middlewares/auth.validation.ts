import { NextFunction, Request, Response } from 'express';


export function isAuth(req: Request, res: Response<any>, next: NextFunction) {
    
  console.log(`Authorized router ${req.originalUrl}`)

  next();
}