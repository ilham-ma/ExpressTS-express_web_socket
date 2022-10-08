import { Response } from "express";

type Content = Object | Object[] | string[] | number[] | null;

const responseHandler = (
  res: Response,
  content: Content,
  statusCode: number,
  message: string = "",
  errors: string[] = []
): Response => {
  return res.status(statusCode).json({ content, message, errors });
};

export const responseUtil_badRequest = (
  res: Response,
  message: string = "BAD_REQUEST",
  errors: string[] = []
): Response => {
  return responseHandler(res, null, 400, message, errors);
};

export const responseUtil_unauthorized = (
  res: Response,
  message: string = "UNAUTHORIZED",
  errors: string[] = []
): Response => {
  return responseHandler(res, null, 401, message, errors);
};

export const responseUtil_success = (
  res: Response,
  content: Content,
  message: string = "SUCCESS"
): Response => {
  return responseHandler(res, content, 200, message, undefined);
};

export const responseUtil_created = (
  res: Response,
  message: string = "CREATED"
): Response => {
  return responseHandler(res, null, 201, message, undefined);
};

export const responseUtil_notFound = (
  res: Response,
  message: string = "NOT_FOUND",
  errors: string[] = []
): Response => {
  return responseHandler(res, null, 404, message, errors);
};

export const responseUtil_forbidden = (
  res: Response,
  message: string = "FORBIDDEN",
  errors: string[] = []
): Response => {
  return responseHandler(res, null, 403, message, errors);
};

export const responseUtil_internalServerError = (
  res: Response,
  message: string = "INTERNAL_SERVER_ERROR",
  errors: string[] = []
): Response => {
  return responseHandler(res, null, 500, message, errors);
};
