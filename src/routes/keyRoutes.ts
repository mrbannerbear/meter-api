import express from "express";
import { createApiKeyHandler } from "../controllers/keyController.js";

const router = express.Router();

// POST /generate-key
router.post("/", createApiKeyHandler);

export default router;
