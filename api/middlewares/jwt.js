import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

const verifyToken = (req, res, next) => {
    const token = req.cookies.accessToken;

    if (!token) {
        console.log("er")
        return next(createError(401, "You are not authenticated"));
    }
    console.log(token)

    jwt.verify(token, process.env.JWT_KEY, (err, payload) => {
        if (err) {
            return next(createError(403, "Token is not valid"));
        }

        req.userId = payload.id;
        next();
    });
};

export default verifyToken;
