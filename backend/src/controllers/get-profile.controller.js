import Organization from "../models/organization.model.js";

const getProfile = async (req, res) => {
    const email = req.body.email;

    try {
        const profile = await Organization.findOne({email});
        res.status(200).json(profile);
    } catch(error) {
        console.status(500).json({error: "Internal server error"});
    }
};

export default getProfile;