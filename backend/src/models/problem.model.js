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

    budget: {
        type: Number,
        required: true
    },

    affectedPeopleCount: {
        type: Number,
        required: true
    },

    urgencyJustification: {
        type: String,
        required: true
    },

    availableResources: {
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

    deadline: {
        type: Date,
        required: true
    }
});

const Problem = mongoose.model("Problem", problemSchema);

export default Problem;
