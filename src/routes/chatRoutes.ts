import express from "express";
import { createChatHandler } from "../controllers/chatController.js";

const router = express.Router();

router.get("/health", (_req, res) => {
	res.status(200).send("chat route is up");
});

router.post("/", createChatHandler);

export default router;
