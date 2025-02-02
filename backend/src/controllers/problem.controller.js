import Problem from "../models/problem.model.js";
import Profile from "../models/profile.model.js";

export const getMyProblems = async (req, res) => {
    const uid = req.body.uid;

    try {
        const profile = await Profile.findOne({uid}, "problems"); // only fetching the "problems" field
        const problems = await Problem.find({_id: {$in: profile.problems}});

        res.status(200).json(problems);
    } catch(error) {
        res.status(500).json({error: "Internal server error"});
    }
};

export const getProblems = async (req, res) => {
    const uid = req.body.uid;

    try {
        const problems = await Problem.find({isSolved: false});
        res.status(200).json(problems);
    } catch(error) {
        res.status(500).json({message: "Internal server error"});
    }
};

export const submitProblem = async (req, res) => {
    const {uid, title, description} = req.body;

    try {
        const problem = await Problem.create({
            uid,
            title,
            description,
        });

        res.status(201).json({
            message: "Problem submitted successfully",
            pid: problem._id
        });
    } catch(error) {
        res.status(500).json({error: "Internal server error"});
    }
};

export const updateProblem = async (req, res) => {
    const pid = req.body.pid;

    try {
        await Problem.findByIdAndUpdate(pid, {isSolved: true});
        res.status(200).json({message: "Problem updated successfully"});
    } catch(error) {
        res.status(500).json({error: "Internal server error"});
    }
};