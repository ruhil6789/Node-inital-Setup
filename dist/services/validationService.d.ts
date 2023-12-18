/// <reference types="qs" />
import { ValidationSchema } from "fastest-validator";
import { ValidateReqType, ValidateType } from "../types/index.js";
import { NextFunction, Request, Response } from "express";
export declare const validateRequest: (req: Request, schema: ValidationSchema, reqType?: ValidateReqType, type?: ValidateType) => Promise<true | undefined>;
export declare const validate: (schema: Record<string, object>, reqType?: ValidateReqType, type?: ValidateType) => (req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction) => void;
//# sourceMappingURL=validationService.d.ts.map