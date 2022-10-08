import { Request, Response, NextFunction } from "express";
import {
  responseUtil_badRequest,
  responseUtil_unauthorized,
} from "@utils/response.utils";

export const authMiddleware_isAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const typeToken = req.headers.authorization?.split(" ")[0];
  const token = req.headers.authorization?.split(" ")[1];

  console.log(token);

  if (!token) return responseUtil_unauthorized(res);

  if (typeToken !== "Bearer")
    return responseUtil_badRequest(res, undefined, ["Invalid token type"]);

  next();
};
