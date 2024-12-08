import mongoose from "mongoose";

const organizationSchema = new mongoose.Schema({
    email: {
        type: String,
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
    }
});

const Organization = mongoose.model("Organization", organizationSchema);

export default Organization;