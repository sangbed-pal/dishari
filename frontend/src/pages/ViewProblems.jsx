import { useEffect, useState } from "react";
import Problem from "../components/Problem.jsx";
import axios from "axios";

const ViewProblems = () => {
    const [data, setData] = useState([]);

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
                    <p className="text-center text-gray-600 text-lg">No problems available at the moment</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {data.map((data) => (
                            <Problem data={data} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ViewProblems;