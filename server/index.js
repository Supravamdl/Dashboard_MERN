import express from "express";
import bodyParser from "body-parser";
import learnersRoutes from "./routes/learners.js";
import dotenv from "dotenv";
import connectDB from "./database/connect.js";
import cors from "cors";

const app = express();

const PORT = 5000;
app.use(cors());
app.use(bodyParser.json());

app.use("/learners", learnersRoutes);

const start = async () => {
  try {
    await connectDB(process.env.DB_CONNECTION);
    app.listen(
      PORT,
      console.log(`Server Running on port: http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
