import jwt from "jsonwebtoken";
import { AuthUserDetails, TokenType } from "../types/controllerTypes.js";
export declare const findUser: (id: string) => Promise<import("sequelize").Model<any, any> | null>;
export declare const createOrFindUser: (userName: string, password: string) => Promise<{
    isCreated: boolean;
    id: string;
    userName: string;
    password: string;
    createdAt: string;
    updatedAt: string;
} | null>;
export declare const checkValidPassword: (password: string, savedPassword: string) => Promise<boolean>;
export declare const verifyToken: (token: string, tokenType: TokenType, details?: AuthUserDetails) => string | jwt.JwtPayload | null;
export declare const generateToken: (details: AuthUserDetails) => string | undefined;
export declare const generateRefreshToken: (id: string) => string | undefined;
//# sourceMappingURL=userService.d.ts.map