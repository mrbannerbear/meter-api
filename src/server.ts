import express from "express";
import userRoutes from "./routes/userRoutes.js";
import keyRoutes from "./routes/keyRoutes.js";
import pool from "./config/db.js";
const app = express();
const port = 5000;

app.use("/users", userRoutes);
app.use("/generate-key", keyRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
