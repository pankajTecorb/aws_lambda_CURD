"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
//import helmet from 'helmet';
const express_1 = __importDefault(require("express"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
require("express-async-errors");
// // import apiRouter from './routes/app';
const jet_logger_1 = __importDefault(require("jet-logger"));
const errors_1 = require("./utils/errors");
const user_1 = __importDefault(require("./routes/user"));
const db_1 = require("./utils/db");
// Constant
const app = express_1.default();
exports.app = app;
//Database connection
db_1.connect();
// // Common middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Add api router
app.use('/api/v1', user_1.default);
app.get("/hello", (req, res, next) => {
    return res.status(200).json({
        message: "Hello, World!", url: process.env.Mongo_Db, port: process.env.Port
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
app.use((err, _, res, __) => {
    jet_logger_1.default.err(err, true);
    const status = (err instanceof errors_1.CustomError ? err.HttpStatus : http_status_codes_1.default.BAD_REQUEST);
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
}));
