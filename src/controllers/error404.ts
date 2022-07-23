import { Request, Response } from "express";

export const error404 = async (req: Request, res: Response) => {
  try {
    return res.sendStatus(404);
  } catch (error: any) {
    return res.error(error);
  }
};
