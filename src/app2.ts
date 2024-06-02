import express, { NextFunction, Request, Response } from "express";
import { MovieRoutes } from "./modules/movies/movie.route";
import notFound from "./middlewares/notFound";
const app = express();

//parsers
app.use(express.json());

app.use("/api/movies", MovieRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Next!");
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    success: false,
    message: "I am from",
    err,
  });
});

//Not Found
app.use(notFound);

export default app;
