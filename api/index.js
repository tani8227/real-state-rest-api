import express from "express";
import userRouter from "./user.js";
import agentRouter from "./agent.js";
const router = express.Router()

router.use("/user", userRouter)
router.use("/agent", agentRouter);


export default router;