import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const checkAuthentication = (req, res, next) => {
    try {
        const authorization = req.headers?.authorization;
        if (!authorization) {
            return res.status(404).json(
                {
                    message: "authorization not found in request"
                });
        }
        const token = req.headers?.authorization.split(' ')[1];
        if (!token) {
            return res.status(404).json(
                {
                    message: "invalid token"
                })
        }
        const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`);
        req.user = decoded;
        next();
    } catch (error) {
        next(error);
    }

}

export default checkAuthentication;