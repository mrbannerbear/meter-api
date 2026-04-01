import express from "express";
import { generateKey } from "../helpers/generateKey.js";

const router = express.Router();

const fakeDb = [];

router.post("/", (req, res) => {
  const generatedKey = generateKey();
  fakeDb.push(generatedKey.hash)
  res.json({ key: generatedKey.randomKey });
});

export default router;
