import express from "express";
import userRoutes from "./routes/userRoutes.js";
import keyRoutes from "./routes/keyRoutes.js";
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/users", userRoutes);
app.use("/get-key", keyRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
