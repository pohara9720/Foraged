import express, { Express, Request, Response } from "express";
import { findLongestStreak } from "./utils";
import cors from "cors"
import dotenv from "dotenv";


dotenv.config();

const app: Express = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.post("/streak", (req, res) => {
  const input = req.body.input;
  const [longestStreak, longestStreakCount] = findLongestStreak(input);
  res.json({ longestStreak, longestStreakCount });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
