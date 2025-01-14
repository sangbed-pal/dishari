import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../constants.js";

export const checkTokenStatus = async (req, res) => {
    const cookies = req.cookies;

    if(Object.keys(cookies).length === 0) {
        res.json({status: "Expired"});
    } else {
        const token = cookies.token;

        if(token.length === 0) {
            res.json({status: "Expired"});
        } else {
            const uid = jwt.verify(token, SECRET_KEY).uid;

            try {
                const user = await User.findById(uid);

                if(user) {
                    res.json({status: "Valid"});
                } else {
                    res.json({status: "Invalid"});
                }
            } catch(error) {
                res.status(500).json({error: "Internal server error"});
            }
        }
    }
};

export const createToken = async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.findOne({email});

        if(user) {
            const isCorrect = await bcrypt.compare(password, user.password);

            if(isCorrect) {
                const token = jwt.sign({uid: user._id}, SECRET_KEY);

                res.cookie("token", token, {
                    httpOnly: true,
                    maxAge: 30 * 24 * 60 * 60 * 1000
                });

                res.status(200).json({message: "Signed in successfully"});
            } else {
                res.status(401).json({error: "Incorrect password"});
            }
        } else {
            res.status(401).json({error: "Incorrect email"});
        }
    } catch(error) {
        res.status(500).json({error: "Internal server error"});
    }
};

export const deleteToken = (req, res) => {
    res.cookie("token", "");
    res.status(200).json({message: "Signed out successfully"});
};