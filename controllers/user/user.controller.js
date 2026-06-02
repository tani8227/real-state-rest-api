import db from "../../model/index.js";
import asyncHandler from "../../utils/asyncHandler.service.js";
import signupService from "../../service/userSignup.service.js";
import fetchUser from "../../service/fetchUser.service.js";
import createToken from "../../service/createToken.service.js";
import checkPasswordService from "../../service/checkPassword.Service.js";


export const userSignup = asyncHandler(async (req, res, next) => {

   const { name, email, phone, role, password } = req.body;
   const user = await signupService({ name, email, phone, role, password })
   return res.status(200).json({
      message: "user created successfully",
      user: user
   });
});

export const userSignin = asyncHandler(async (req, res, next) => {
   const { email, password } = req.body;

   const user = await fetchUser({ email, password });
   if (!user) {
      return res.status(404).json(
         {
            message: "user not found",
         });
   }
   const match = await checkPasswordService(password, user.password);
   if (!match) {
      return res.status(401).json(
         {
            message: "password inccorrect"
         });
   }
   const token = createToken(user.id)
   return res.status(200).json(
      {
         message: "user login successfully",
         token: token,
      })
});

export const check = asyncHandler((req, res, next) => {
   return res.status(200).json(
      {
         message: "token set up working"
      });
});