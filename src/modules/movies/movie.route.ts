import express from "express";
import { MovieControllers } from "./movie.controller";
import { ReviewControllers } from "../reviews/review.controller";

const router = express.Router();

router.post("/create-movie",MovieControllers.createMovie);

router.get("/", MovieControllers.getAllMovies);

router.get("/:movieId", MovieControllers.getMoviesById);

router.get("/:slug", MovieControllers.getMovieBySlug);

router.post("/:slug/review",ReviewControllers.addReview);


export const MovieRoutes = router;






// router.get("/:slug/reviews", ReviewControllers.getAllReviews);
// router.put("/:slug/review", ReviewControllers.getReviewById);
// router.delete("/:slug/review", ReviewControllers.deleteReview);