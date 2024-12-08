import User from "../models/user.model.js";
import sendCookie from "../utils/send-cookie.js";
import sendEmail from "../utils/send-email.js";

const registerUser = async (req, res) => {
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
}

export default registerUser;