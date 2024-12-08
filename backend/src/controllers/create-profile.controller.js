import Organization from "../models/organization.model.js";
import uploadOnCloudinary from "../utils/cloudinary.js";

const createProfile = async (req, res) => {
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
}

export default createProfile;