import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import handleValidateError2 from "../errors/validateError";
import handleValidateError3 from "../errors/validateError";
import handleValidateError1 from "../errors/validateError";
import { TErrorSources } from "../interface/error.interface";
import val2 from "./val2";

const globalErrorHandler2: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = 500;
  let message = "Something went wrong!";
  let errorSources: TErrorSources = [
    {
      path: "",
      message: "Something went wrong",
    },
  ];

  if (err.name === "ValidationError") {
    const simplifiedError = handleValidateError3(err);
  } else if (err.code === 11000) {
    const simplifiedError = val2(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  }
  res.status(500).json({
    err,
  });
};

export default globalErrorHandler2;

//validationError
//CastError
//duplicate error
