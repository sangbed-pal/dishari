import axios from "axios";
import { useNavigate } from "react-router-dom";

const SubmitProblems = () => {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
    
        try {
            const response = await axios.post("/api/v1/problems", data);
            const pid = response.data.pid;

            await axios.patch("/api/v1/profile", {pid});

            navigate("/problems/history");
        } catch(error) {
            console.log(error);
        }
    };    

    return (
        <div className="min-h-screen text-black flex justify-center items-center py-10">
            <div className="bg-gray-100 w-[40rem] p-8 rounded-3xl mt-20">
                <h1 className="text-3xl font-bold mb-6 text-center">Submit a Problem</h1>
                <p className="text-gray-600 text-sm mb-10 text-center">
                    Fill in the details below to help us understand the problem clearly.
                </p>

                <form className="space-y-8" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            className="w-full px-4 py-3 rounded-lg bg-white text-black border-2 border-[#29af8a] focus:outline-none"
                            required
                        />

                        <textarea
                            name="description"
                            placeholder="Description"
                            rows="5"
                            className="w-full px-4 py-3 rounded-lg bg-white text-black border-2 border-[#29af8a] focus:outline-none"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full px-4 py-3 rounded-lg bg-[#29af8a] text-white font-semibold hover:bg-white hover:text-black hover:border-2 hover:border-[#29af8a] transition-all duration-300"
                    >
                        Submit Problem
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SubmitProblems;
