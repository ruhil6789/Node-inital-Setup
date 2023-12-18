import { StatusCodes } from "http-status-codes";
import { createOrFindUser, generateRefreshToken, generateToken, } from "../services/userService.js";
import { sendSuccessRes } from "../services/serverService.js";
import AppError from "../utils/AppError.js";
import catchAsync from "../utils/catchAsync.js";
export const signUpOrSignIn = catchAsync(async (req, res, next) => {
    const { userName, password } = req.body;
    const user = await createOrFindUser(userName, password);
    if (!user)
        return next(new AppError("Invalid username or password!", StatusCodes.BAD_REQUEST));
    const token = generateToken(user);
    const refreshToken = generateRefreshToken(user.id);
    return sendSuccessRes(res, "LoggedIn Successfully!", { token, refreshToken }, user.isCreated ? StatusCodes.CREATED : StatusCodes.OK);
});
//# sourceMappingURL=userController.js.map