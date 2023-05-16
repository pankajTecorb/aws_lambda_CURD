//import helmet from 'helmet';
import  express from "express";
import  { NextFunction, Request, Response } from 'express';
import StatusCodes from 'http-status-codes';
import 'express-async-errors';

// // import apiRouter from './routes/app';
import logger from 'jet-logger';
import { CustomError } from './utils/errors';


import apiRouter from './routes/user';



import { connect, disconnect } from './utils/db';
// Constant
const app = express();
//Database connection
connect();


// // Common middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add api router
app.use('/api/v1', apiRouter);

app.get("/hello", (req, res, next) => {
  return res.status(200).json({
    message: "Hello, World!"
  });
});

app.get("/error", (req, res, next) => {
  const err = new Error();
  return next(err);
});

app.use((req, res, next) => {
  return res.status(404).json({
    message: "Not Found",
  });
});

// Error handling
app.use((err: Error | CustomError, _: Request, res: Response, __: NextFunction) => {
  logger.err(err, true);
  const status = (err instanceof CustomError ? err.HttpStatus : StatusCodes.BAD_REQUEST);
  return res.status(status).json({
      error: err.message,
      message: err.message,
      code: status
  });
});


app.use(((err, req, res, next) => {
  return res.status(500).json({
    message: "Internal Server Error",
  });
}) as express.ErrorRequestHandler);

export { app };
