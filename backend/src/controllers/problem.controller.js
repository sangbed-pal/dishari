import Problem from "../models/problem.model.js";
import Organization from "../models/organization.model.js";

export const getProblems = async (req, res) => {
    try {
        const data = [];
        const problems = await Problem.find();

        // Create an array of promises for asynchronous operations
        const promises = problems.map(async (problem) => {
            const organization = await Organization.findOne({email: problem.email});
            data.push({
                problem, 
                organization
            });
        });

        // Wait for all promises to resolve
        await Promise.all(promises);

        console.log(data); // This will log the data after the loop has completed

        res.status(200).json(data); // Send the response with the data
    } catch(error) {
        console.log(error);
        res.status(500).json({ message: "An error occurred" });
    }
};


export const submitProblem = async (req, res) => {
    try {
        await Problem.create(req.body);
        res.status(201).json({message: "Problem submitted successfully"});
    } catch(error) {
        res.status(500).json({error: "Internal server error"});
    }
};

export const solveProblem = (req, res) => {

};
