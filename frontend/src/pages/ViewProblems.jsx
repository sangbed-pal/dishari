import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ViewProblems = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("/api/v1/problems/get");
                setData(response.data);
            } catch(error) {
                console.log(error);
            }
        })();
    }, []);

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <div className="min-h-screen text-black flex justify-center items-center py-10">
            <div className="w-[90%] max-w-6xl">
                <h1 className="text-3xl font-bold mb-8 text-center">Available Problems</h1>

                {data.length === 0 ? (
                    <p className="text-center text-gray-600 text-lg">No problems available at the moment.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {data.map((data) => (
                            <div
                                key={data.problem._id}
                                className="bg-white p-6 rounded-xl border-2 border-[#29af8a] transition-transform duration-300 hover:scale-105 cursor-pointer"
                                onClick={() => navigate("/problems/details", {state: data})}
                            >
                                <h2 className="text-2xl font-bold text-[#29af8a] mb-4">{data.problem.title}</h2>

                                <p className="text-gray-700 font-bold mb-2">
                                    <span className="font-semibold">Organization:</span> {data.organization.name}
                                </p>

                                <p className="text-gray-700 font-bold mb-2">
                                    <span className="font-semibold">Priority:</span> {data.problem.priority}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ViewProblems;
