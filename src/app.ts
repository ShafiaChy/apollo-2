import express, { NextFunction, Request, Response } from "express";
import { MovieRoutes } from "./modules/movies/movie.route";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import notFound from "./middlewares/notFound";
import globalErrorHandler2 from "./middlewares/globalErrorHandler2";
const app = express();

//parsers
app.use(express.json());

app.use("/api/movies", MovieRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Next!");
});

app.use(globalErrorHandler2);
//Not Found
app.use(notFound);

export default app;
