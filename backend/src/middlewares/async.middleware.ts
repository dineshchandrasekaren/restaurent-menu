import type { NextFunction, Request, Response } from "express";

const asynchronous =
  (
    controller: (
      req: Request,
      res: Response,
      next: NextFunction
    ) => Promise<void | Response>
  ) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      next(error);
    }
  };

export default asynchronous;
