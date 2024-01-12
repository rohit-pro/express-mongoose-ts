import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import { Error } from "mongoose";

import validationError from "../error/validation-error";
import { successResponse } from "../helper/success-response";
import { UserModel } from "./user.model";
import { UserServiceImpl } from "./user.serviceImpl";

const userService = new UserServiceImpl();

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await userService.getUsers();
    return successResponse(res, result);
  } catch (error: any) {
    next(new createHttpError.BadRequest(error?.message));
  }
};

export const getUserDetails = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const result = await userService.getUsersById(id);
    if (!result) return next(createHttpError.NotFound("User doesn't exist"));
    return successResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    validatePayload(req, next);
    const result = await userService.createUser(req.body);
    res.status(201);
    return successResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    validatePayload(req, next);
    const result = await userService.updateUser(req.body);
    if (!result) return next(createHttpError.NotFound("User doesn't exist"));
    return successResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const validatePayload = (req: Request, next: NextFunction) => {
  const body = new UserModel(req.body);
  const error: Error.ValidationError | null = body.validateSync();
  if (error) return next(new validationError(error));
};
