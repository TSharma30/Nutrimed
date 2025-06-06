import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from "./routes/auth.route.js"
import cookieParser from 'cookie-parser';
import cors from "cors";
import healthFormRoutes from "../api/routes/health.route.js"
// import dietRoutes from "../api/routes/diet.route.js"


dotenv.config();
mongoose.set("strictQuery", true);

const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB!");
  } catch (error) {
    console.log(error);
  }
};





app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoute);
app.use('/api/user', healthFormRoutes);
// app.use('/api/diet', dietRoutes );



app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).send(errorMessage);
});

app.listen(8800, () => {
  connect();
  console.log("Server is running on port 8800");
});
