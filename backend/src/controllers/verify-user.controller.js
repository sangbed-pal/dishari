import User from "../models/user.model.js";
import sendCookie from "../utils/send-cookie.js";
import bcrypt from "bcrypt";

const verifyUser = async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.findOne({email});

        if (user) {
            const isCorrect = await bcrypt.compare(password, user.password);

            if (isCorrect) {
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
}

export default verifyUser;