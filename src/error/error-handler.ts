import { Request, Response, NextFunction } from "express";

export default (err: any, req: Request, res: Response, next: NextFunction) => {
  const { status, message = "Server Error", errors } = err;
  const path = req.originalUrl;

  let validationErrors: { [key: string]: string } | undefined;

  if (errors) {
    validationErrors = {};
    for (let key in errors.errors) {
      validationErrors![key] = errors.errors[key].message;
    }
  }

  console.log(`${path}: ${message}\n`, err);

  res.status(status || 500).send({
    success: 0,
    message: message,
    timestamp: new Date(),
    path,
    validationErrors,
  });
};
