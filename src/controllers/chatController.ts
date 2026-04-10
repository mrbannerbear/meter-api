import { type NextFunction, type Request, type Response } from "express";
import { z } from "zod";
import { createChatService } from "../services/chatService.js";

const ChatRequestSchema = z.object({
	apiKey: z.string().min(1),
});

export const createChatHandler = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const { apiKey } = ChatRequestSchema.parse(req.body);
		const result = await createChatService(apiKey);
		res.status(200).json(result);
	} catch (error) {
		next(error);
	}
};
