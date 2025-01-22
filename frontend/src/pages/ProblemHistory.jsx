import axios from "axios";
import Problem from "../components/Problem.jsx";
import { useState, useEffect, useContext } from "react";
import organizationContext from "../contexts/organization-context.js";

const ProblemHistory = () => {
    const [problems, setProblems] = useState([]);
    const {organizationType} = useContext(organizationContext);

    useEffect(() => {
        (async () => {
            try {
                const response1 = await axios.get("/api/v1/problems/me");
                const updatedProblems = [...response1.data];

                if(organizationType === "ngo") {
                    for(let i=0; i < updatedProblems.length; i++) {
                        const uid = updatedProblems[i].uid;
                        const response2 = await axios.get(`/api/v1/profile/${uid}?field=name`);
                    
                        updatedProblems[i].organizationName = response2.data.name;
                    }
                }

                setProblems(updatedProblems);
            } catch(error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <div className="min-h-screen text-black flex justify-center items-center py-10">
            <div className="w-[90%] max-w-6xl">
                <h1 className="text-3xl font-bold mb-8 text-center">Problem History</h1>

                {problems.length === 0 ? (
                    <p className="text-center text-gray-600 text-lg">No problems available at the moment</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {problems.map((problem) => {
                            return (
                                <Problem key={problem._id} problem={problem} showStatus={true}/>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProblemHistory;