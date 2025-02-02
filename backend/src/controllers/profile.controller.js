import Profile from "../models/profile.model.js";
import uploadOnCloudinary from "../utils/cloudinary.js";
import {cacheProfile} from "../utils/redis.js";

export const getMyProfile = async (req, res) => {
    const uid = req.body.uid;
    const field = req.query.field;

    try {
        const profile = await cacheProfile(uid, field, "get");
        res.status(200).json(profile);
    } catch(error) {
        res.status(500).json({error: "Internal server error"});
    }
};

export const getProfile = async (req, res) => {
    const uid = req.params.uid;
    const field = req.query.field;

    try {
        const profile = await cacheProfile(uid, field, "get");
        res.status(200).json(profile);
        /*if(field === "all") {
            const profile = await Profile.findOne({uid});
            res.status(200).json(profile);
        } else {
            const profile = await Profile.findOne({uid}, field);
            res.status(200).json(profile);
        }*/
    } catch(error) {
        res.status(500).json({error: "Internal server error"});
    }
};

export const createProfile = async (req, res) => {
    const {uid, name, type, street, city, district, pin, landmark, contact1, contact2} = req.body;

    const filePath = req.file.path;
    const photo = await uploadOnCloudinary(filePath);

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
            landmark,
            contact1,
            contact2
        });

        res.status(201).json({message: "Profile created successfully"});
    } catch(error) {
        console.log(error);
        res.status(500).json({error: "Internal server error"});
    }
};

export const updateProfile = async (req, res) => {
    const {uid, pid} = req.body;

    try {
        await Profile.findOneAndUpdate({uid}, {$push: {problems: pid}});
        cacheProfile(uid, null, "update");
        res.status(200).json({message: "Profile updated successfully"});
    } catch(error) {
        res.status(500).json({error: "Internal server error"});
    }
};

export const deleteProfile = async (req, res) => {
    const uid = req.body.uid;

    try {
        await Profile.findOneAndDelete({uid});
        res.status(200).json({message: "Profile deleted successfully"});
    } catch(error) {
        res.status(500).json({message: "Internal server error"});
    }
};