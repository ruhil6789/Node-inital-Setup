import { Request, Response, NextFunction } from "express";
import { Err } from "../types/index.js";
declare const errorController: (err: Err, req: Request, res: Response, _: NextFunction) => void;
export default errorController;
//# sourceMappingURL=errorController.d.ts.map