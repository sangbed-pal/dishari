import mongoose from "mongoose";

const problemSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    priority: {
        type: String,
        required: true
    },

    isSolved: {
        type: Boolean,
        required: true,
        default: false
    }
}, {timestamps: true});

const Problem = mongoose.model("Problem", problemSchema);

export default Problem;
