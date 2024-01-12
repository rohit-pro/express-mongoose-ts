import { Response } from "express";

export const successResponse = (
  response: Response,
  data: any,
  message: string = ""
) => {
  return response.send({
    success: 1,
    message,
    data,
  });
};
