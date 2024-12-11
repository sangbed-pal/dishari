import Organization from "../models/organization.model.js";
import uploadOnCloudinary from "../utils/cloudinary.js";

export const getOrganizationType = async (req, res) => {
    const email = req.body.email;

    try {
        const organization = await Organization.findOne({email});
        res.status(200).json(organization.type);
    } catch(error) {
        res.status(500).json({error: "Internal server error"});
    }
};

export const createProfile = async (req, res) => {
    const filePath = req.file.path;
    const url = await uploadOnCloudinary(filePath);

    req.body.photo = url;

    console.log(req.body);

    try {
        await Organization.create(req.body);
        res.status(201).json({message: "Profile created successfully"});
    } catch(error) {
        res.status(500).json({error: "Internal server error"});
    }
};

export const getProfile = async (req, res) => {
    const email = req.body.email;

    try {
        const profile = await Organization.findOne({email});
        res.status(200).json(profile);
    } catch(error) {
        res.status(500).json({error: "Internal server error"});
    }
};
