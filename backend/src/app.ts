import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import dotenv from "dotenv"

dotenv.config();


const app=express();

const PORT = process.env.PORT || 5000;

const allowedOrigins = process.env.FRONTEND_URL || "http://localhost:3000";

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));
app.use(express.json());

app.use("/api/auth", authRoutes);



app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

