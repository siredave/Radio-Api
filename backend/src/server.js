import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import streamRoutes from "./routes/stream.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", streamRoutes);

app.get("/", (req, res) => {
  res.send("Radio API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
