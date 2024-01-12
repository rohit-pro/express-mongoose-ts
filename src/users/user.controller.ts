import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";

export const getUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.status(200).send([]);
  } catch (error: any) {
    next(new createHttpError.BadRequest(error?.message));
  }
};

export const getUserDetails = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    return res.status(200).send({ id });
  } catch (error: any) {
    next(new createHttpError.BadRequest(error?.message));
  }
};
