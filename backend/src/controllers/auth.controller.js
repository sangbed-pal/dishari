import User from "../models/user.model.js";
import sendCookie from "../utils/send-cookie.js";
import sendEmail from "../utils/send-email.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
    const {email, password} = req.body;

    try {
        await User.create({
            email,
            password
        });

        sendCookie(res, email);
        sendEmail(email, "registration");

        res.status(201).json({message: "User registered successfully"});
    } catch (error) {
        res.status(500).json({error: "Internal server error"});
    }
};

export const verifyUser = async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.findOne({email});

        if(user) {
            const isCorrect = await bcrypt.compare(password, user.password);

            if(isCorrect) {
                sendCookie(res, email);
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

export const signOutUser = (req, res) => {
    res.cookie("token", "");
    res.status(200).json({message: "User signed out successfully"})
};

export const isSignedIn = (req, res) => {
    let signedIn;

    if(Object.keys(req.cookies).length === 0) {
        signedIn = false;
    } else if(req.cookies.token === "") {
        signedIn = false;
    } else {
        signedIn = true;
    }

    res.status(200).json(signedIn);
};