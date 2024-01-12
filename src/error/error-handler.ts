import { Request, Response, NextFunction } from "express";

export default (err: any, req: Request, res: Response, next: NextFunction) => {
  const { status, message, errors } = err;

  let validationErrors: { [key: string]: string } | undefined;

  if (errors) {
    validationErrors = {};
    errors.forEach(
      (error: any) => (validationErrors![error.param] = error.msg)
    );
  }

  res.status(status || 500).send({
    success: 0,
    message: message || "Server Error",
    timestamp: new Date(),
    path: req.originalUrl,
    validationErrors,
  });
};
