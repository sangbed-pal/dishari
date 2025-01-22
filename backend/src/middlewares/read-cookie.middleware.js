import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../constants.js";

const readCookie = (req, res, next) => {
    const token = req.cookies.token;
    const uid = jwt.verify(token, SECRET_KEY).uid;

    req.body.uid = uid;

    next();
}

export default readCookie;