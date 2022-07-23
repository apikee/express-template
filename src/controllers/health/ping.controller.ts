import { Request, Response } from "express";

export const pingController = async (req: Request, res: Response) => {
  try {
    return res.success("pong");
  } catch (error: any) {
    return res.error(error);
  }
};
