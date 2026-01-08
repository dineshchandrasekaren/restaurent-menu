import type { NextFunction, Request, Response } from "express";
import CustomError from "../utils/customError.util";
import { MessageHandler } from "../utils/handler.util";

export const errorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _: NextFunction
) => {
  if (err instanceof CustomError) {
    res.status(err.code).json(new MessageHandler(err.message));
    return;
  }

  res.status(500).json(new MessageHandler("Internal server error."));
};
