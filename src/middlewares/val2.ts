/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  TErrorSources,
  TGenericErrorResponse,
} from "../interface/error.interface";

const val2 = (err: any): TGenericErrorResponse => {
  // Extract value within double quotes using regex
  console.log(err.message);
  const match = err.message.match(/"([^"]*)"/);

  // The extracted value will be in the first capturing group
  const extractedMessage = match && match[1];
  console.log(extractedMessage);
  const errorSources: TErrorSources = [
    {
      path: "",
      message: `${extractedMessage} is already exists`,
    },
  ];

  const statusCode = 400;

  return {
    statusCode,
    message: "Invalid ID",
    errorSources,
  };
};

export default val2;