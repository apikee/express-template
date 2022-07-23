import { NextFunction, Request, Response } from "express";

export const responses = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.success = (result: any, status: number = 200) =>
      res.status(status).json({ success: true, result });
    res.error = (error: any, status: number = 400) =>
      res.status(status).json({
        success: false,
        error: error?.message || error,
      });

    return next();
  } catch (error: any) {
    return res.status(400).json({ error: error?.message || error });
  }
};
