import { type NextFunction, type Request, type Response } from "express";
import { ApiKeyCreateRequestSchema } from "../config/schema.js";
import { createApiKeyService } from "../services/keyService.js";

export const createApiKeyHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log("req", req.body);
  try {
    const validatedRequestData = ApiKeyCreateRequestSchema.parse(req.body);
    const apiKey = await createApiKeyService(validatedRequestData);
    res.status(201).json(apiKey);
  } catch (error) {
    next(error);
  }
};
