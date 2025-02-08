import { useNavigate } from "react-router-dom";

const Problem = ({problem, showStatus}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        let showButton = false, buttonText = "";

        if(problem.organizationName) {
            if(!showStatus) {
                showButton = true;
                buttonText = "Solve Problem";
            }
        } else {
            if(!problem.isSolved) {
                showButton = true;
                buttonText = "Click here if the problem has been solved";
            } 
        }

        navigate("/problems/details", {
            state: {
                data: {problem},
                showButton,
                buttonText
            }
        });
    };
    
    return (
        <div
            className="bg-white p-6 rounded-xl border-2 border-[#29af8a] transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={handleClick}
        >
            <h2 className="text-2xl font-bold text-[#29af8a] mb-4">{problem.title}</h2>

            {problem.organizationName && (
                <p className="text-gray-700 font-bold mb-2">
                    <span className="font-semibold">Organization:</span> {problem.organizationName}
                </p>
            )}

            <p className="text-gray-700 font-bold mb-2">
                <span className="font-semibold">Submitted on:</span> {new Date(problem.createdAt).toLocaleDateString()}
            </p>

            {showStatus && (
                <p className="text-gray-700 font-bold mb-2">
                    <span className="font-semibold">Status:</span> {problem.isSolved ? "Solved" : "Pending"}
                </p>
            )}
        </div>
    );
};

export default Problem;