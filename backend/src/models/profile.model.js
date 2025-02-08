import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    uid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    
    name: {
        type: String,
        required: true
    },

    type: {
        type: String,
        required: true
    },

    photo: {
        type: String,
        required: true
    },

    street: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    },

    district: {
        type: String,
        required: true
    },

    pin: {
        type: Number,
        required: true
    },

    landmark: {
        type: String,
        required: true
    },

    contact1: {
        type: Number,
        required: true
    },

    contact2: {
        type: Number,
        required: true
    },

    problems: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Problem",
        required: true,
        default: []
    }
});

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;