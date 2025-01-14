import mongoose from "mongoose";

const problemSchema = new mongoose.Schema({
    uid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
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

    isSolved: {
        type: Boolean,
        required: true,
        default: false
    }
}, {timestamps: true});

const Problem = mongoose.model("Problem", problemSchema);

export default Problem;
