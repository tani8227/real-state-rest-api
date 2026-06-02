import express from "express";
import * as userController from "../controllers/user/user.controller.js";
import validate from "../middleWares/validate/validate.js";
import signupSchema from "../validation/signupSchema.validation.js";
import signinSchema from "../validation/signinSchema.validation.js";
import checkAuthentication from "../middleWares/auth/checkAuthentication.js";
const userRouter = express.Router();


userRouter.post("/sign-up", validate(signupSchema), userController.userSignup);
userRouter.post("/sign-in", validate(signinSchema), userController.userSignin);
userRouter.get("/check", checkAuthentication, userController.check);

export default userRouter;