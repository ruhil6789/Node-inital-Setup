import { Err } from "../types";
declare class AppError implements Err {
    message: string;
    statusCode: number;
    status: string;
    isOperational: boolean;
    errName?: string;
    code?: string | number;
    name: string;
    err?: any;
    constructor(message: string, statusCode: number, err?: any, name?: string, code?: string | number);
}
export default AppError;
//# sourceMappingURL=AppError.d.ts.map