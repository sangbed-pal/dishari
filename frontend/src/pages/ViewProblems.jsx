import { useEffect, useState } from "react";
import Problem from "../components/Problem.jsx";
import axios from "axios";

const ViewProblems = () => {
    const [problems, setProblems] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response1 = await axios.get("/api/v1/problems");
                const updatedProblems = [...response1.data];

                for(let i=0; i < updatedProblems.length; i++) {
                    const uid = updatedProblems[i].uid;
                    const response2 = await axios.get(`/api/v1/profile/${uid}?field=name`);
                
                    updatedProblems[i].organizationName = response2.data.name;
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
                <h1 className="text-3xl font-bold mb-8 text-center">Available Problems</h1>

                {problems.length === 0 ? (
                    <p className="text-center text-gray-600 text-lg">No problems available at the moment</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {problems.map((problem) => {
                            return (
                                <Problem key={problem._id} problem={problem} showStatus={false}/>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ViewProblems;