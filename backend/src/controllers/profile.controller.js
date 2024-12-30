import Profile from "../models/profile.model.js";
import uploadOnCloudinary from "../utils/cloudinary.js";

export const getMyProfile = async (req, res) => {
    const uid = req.body.uid;
    const field = req.query.field;

    try {
        if(field === "all") {
            const profile = await Profile.findById(uid);
            res.status(200).json(profile);
        } else {
            const profile = await Profile.findById(uid, field);
            res.status(200).json(profile);
        }
    } catch(error) {
        res.status(500).json({error: "Internal server error"});
    }
};

export const getProfile = async (req, res) => {
    const uid = req.params.uid;

    try {
        const profile = await Profile.findById(uid);
        res.status(200).json(profile);
    } catch(error) {
        res.status(500).json({error: "Internal server error"});
    }
};

export const createProfile = async (req, res) => {
    const {uid, name, type, street, city, district, pin, contact1, contact2} = req.body;

    const filePath = req.file.path;
    const url = await uploadOnCloudinary(filePath);
    const photo = url;

    try {
        await Profile.create({
            uid,
            name,
            type,
            photo,
            street,
            city,
            district,
            pin,
            contact1,
            contact2
        });

        res.status(201).json({message: "Profile created successfully"});
    } catch(error) {
        res.status(500).json({error: "Internal server error"});
    }
};

export const updateProfile = async (req, res) => {
    const pid = req.params.pid;
};

export const deleteProfile = async (req, res) => {
    const uid = req.body.uid;

    try {
        await Profile.findByIdAndDelete(uid);
        res.status(200).json({message: "Profile deleted successfully"});
    } catch(error) {
        res.status(500).json({message: "Internal server error"});
    }
};