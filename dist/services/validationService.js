import Validator from "fastest-validator";
import AppError from "../utils/AppError.js";
import catchAsync from "../utils/catchAsync.js";
const validationError = (message, details) => {
    throw new AppError(message, 400, details, "Validation Error");
};
export const validateRequest = async (req, schema, reqType, type) => {
    const validator = new Validator();
    let validate = [];
    if (type === "single" && reqType) {
        validate = await validator.validate(req[reqType], schema);
    }
    else if (type === "multiple") {
        for (const key of Object.keys(schema)) {
            validate = await validator.validate(req[key], schema[key]);
        }
    }
    if (validate === true)
        return true;
    validationError(validate[0].message || "Validation Failed", validate);
};
export const validate = (schema, reqType = "body", type = "single") => {
    return catchAsync(async (req, _, next) => {
        const isValid = await validateRequest(req, schema, reqType, type);
        if (isValid) {
            next();
        }
    });
};
//# sourceMappingURL=validationService.js.map