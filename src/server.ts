import express from "express";
import userRoutes from "./routes/userRoutes.js";
import keyRoutes from "./routes/keyRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";
const app = express();
const port = 5000;

app.use(express.json()); 

app.use("/users", userRoutes);
app.use("/generate-key", keyRoutes);
app.use("/chat", chatRoutes);

// global error handler middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
