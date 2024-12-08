import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../constants.js";

const readCookie = (req, res, next) => {
    const token = req.cookies.token;
    const email = jwt.verify(token, SECRET_KEY).email;

    req.body.email = email;

    next();
}

export default readCookie;