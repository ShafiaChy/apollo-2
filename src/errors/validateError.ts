import mongoose from "mongoose";
import {
  TErrorSources,
  TGenericErrorResponse,
} from "../interface/error.interface";

// step 1
const handleValidateError1 = (err: mongoose.Error.ValidationError) => {};

//step 2
const handleValidateError2 = (err: mongoose.Error.ValidationError) => {
  //   const errorSources: TErrorSources = {err.errors.map};
  const errorSources: TErrorSources = Object.values(err.errors);
  console.log(errorSources);
};

const handleValidateError3 = (
  err: mongoose.Error.ValidationError
): TGenericErrorResponse => {
  const errorSources: TErrorSources = Object.values(err.errors).map(
    (val: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        message: val?.message,
        path: val?.path,
      };
    }
  );

  const statusCode = 400;

  return {
    statusCode,
    message: "Validation Error",
    errorSources,
  };
};

export default handleValidateError3;
