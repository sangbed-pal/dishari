import { useNavigate } from "react-router-dom";

const Problem = ({data}) => {
    const navigate = useNavigate();
    
    return (
        <div
            key={data.problem._id}
            className="bg-white p-6 rounded-xl border-2 border-[#29af8a] transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => navigate("/problems/details", { state: data })}
        >
            <h2 className="text-2xl font-bold text-[#29af8a] mb-4">{data.problem.title}</h2>

            <p className="text-gray-700 font-bold mb-2">
                <span className="font-semibold">Organization:</span> {data.organization.name}
            </p>

            <p className="text-gray-700 font-bold mb-2">
                <span className="font-semibold">Submitted on:</span> {new Date(data.problem.createdAt).toLocaleDateString()}
            </p>
        </div>
    );
};

export default Problem;