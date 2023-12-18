import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { JWT_SECRET, REFRESH_JWT_SECRET } from "../config/index.js";
export const findUser = async (id) => User.findByPk(id);
export const createOrFindUser = async (userName, password) => {
    const [user, created] = await User.findOrCreate({
        where: { userName },
        defaults: { password: await bcrypt.hash(password, 10) },
    });
    const userDetails = user.dataValues;
    if (created)
        return { ...userDetails, isCreated: true };
    const isValidPassword = await checkValidPassword(password, userDetails.password);
    if (!isValidPassword)
        return null;
    return { ...userDetails, isCreated: false };
};
export const checkValidPassword = async (password, savedPassword) => bcrypt.compare(password, savedPassword);
export const verifyToken = (token, tokenType, details) => {
    const secret = tokenType === "normal"
        ? JWT_SECRET && details && JWT_SECRET + details.id
        : REFRESH_JWT_SECRET && REFRESH_JWT_SECRET;
    if (!secret)
        return null;
    return jwt.verify(token, secret);
};
export const generateToken = (details) => JWT_SECRET &&
    jwt.sign({
        ...details,
        password: undefined,
        createdAt: undefined,
        updatedAt: undefined,
    }, JWT_SECRET + details.id, {
        expiresIn: "1d",
    });
export const generateRefreshToken = (id) => REFRESH_JWT_SECRET &&
    jwt.sign({ id }, REFRESH_JWT_SECRET, {
        expiresIn: "7d",
    });
//# sourceMappingURL=userService.js.map