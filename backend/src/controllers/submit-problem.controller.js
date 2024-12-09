import Problem from "../models/problem.model.js";

const submitProblem = async (req, res) => {
    try {
        await Problem.create(req.body);
        res.status(201).json({message: "Problem submitted successfully"});
    } catch(error) {
        res.status(500).json({error: "Internal server error"});
    }
};

export default submitProblem;