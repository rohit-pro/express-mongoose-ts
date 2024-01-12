import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import createHttpError from "http-errors";

import { dbConnect } from "./helper/db-connection";
import handleError from "./error/error-handler";
import userRouter from "./users/user.route";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

dbConnect();

app.use(express.json());

app.use("/users", userRouter);

app.use((req: Request, res: Response, next: NextFunction) => {
  next(new createHttpError.NotFound("API Doesn't exist"));
});

app.use(handleError);

app.listen(port, () => {
  console.log(`app is listening on ${port} 🚀🚀🚀`);
});
