class AppError {
    message;
    statusCode;
    status;
    isOperational;
    errName;
    code;
    name;
    err;
    constructor(message, statusCode, err, name, code) {
        this.message = message;
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
        this.isOperational = true;
        this.name = name || "App Error";
        this.code = code;
        this.err = err;
        Error.captureStackTrace(this, this.constructor);
    }
}
export default AppError;
//# sourceMappingURL=AppError.js.map