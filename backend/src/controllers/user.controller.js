import User from "../models/user.model.js";

export const createUser = async (req, res) => {
    const {email, password} = req.body;
 
    try {
        await User.create({
            email,
            password
        });

        res.status(201).json({message: "User created successfully"});
    } catch(error) {
        res.status(500).json({error: "Internal server error"});
    }
};

export const deleteUser = async (req, res) => {
    const uid = req.uid;

    try {
        await User.findByIdAndDelete(uid);
        res.status(200).json({message: "User deleted successfully"});
    } catch(error) {
        res.status(500).json({error: "Internal server error"});
    }
};