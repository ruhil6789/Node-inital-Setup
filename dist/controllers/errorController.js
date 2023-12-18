import { nodeEnv } from "../config/constants.js";
import { NODE_ENV } from "../config/index.js";
import AppError from "../utils/AppError.js";
import logger from "../logs/logger.js";
const sendErrorDev = (err, req, res) => {
    logger.error(`💥 ${err.stack}`);
    return res.status(err.statusCode).json({
        error: err,
        stack: err.stack,
    });
};
const sendErrorProd = (err, req, res) => {
    if (req.originalUrl.startsWith("/api")) {
        if (err.isOperational) {
            return res.status(err.statusCode).json({
                status: err.status,
                message: err.message,
                statusCode: err.statusCode,
            });
        }
        logger.error(`💥 ${err}`);
        return res.status(500).json({
            status: "error",
            message: "Something went very wrong!",
            statusCode: 500,
        });
    }
    if (err.isOperational) {
        return res.status(err.statusCode).render("error", {
            title: "Something went wrong!",
            msg: err.message,
            statusCode: err.statusCode,
        });
    }
    logger.error(`💥 ${err}`);
    return res.status(err.statusCode).render("error", {
        title: "Something went wrong!",
        msg: "Please try again later.",
        statusCode: err.statusCode,
    });
};
const handleCastErrorDB = (err) => {
    const message = `Invalid ${err.path}: ${err.value}.`;
    return new AppError(message, 400);
};
const errorController = (err, req, res, _) => {
    if (err.body || err.query || err.params) {
        err.statusCode = 400;
        err.status = "fail";
    }
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";
    if (NODE_ENV === nodeEnv.production) {
        let error = { ...err };
        error.message = err.message;
        if (error.name === "CastError")
            error = handleCastErrorDB(error);
        sendErrorProd(error, req, res);
    }
    else {
        sendErrorDev(err, req, res);
    }
};
export default errorController;
//# sourceMappingURL=errorController.js.map