import axios from "axios";
import { useNavigate } from "react-router-dom";

const Feedback = () => {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        try {
            await axios.post("/api/v1/feedback", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            navigate("/");
        } catch(error) {
            console.log(error);
        }
    };

    return (
        <div className="min-h-screen text-black flex justify-center items-center py-10 mt-20">
            <div className="bg-gray-100 w-[40rem] p-8 rounded-3xl">
                <h1 className="text-3xl font-bold mb-6 text-center">My Feedback</h1>
                <p className="text-gray-600 text-sm mb-10 text-center">
                    We value your feedback. Please share your thoughts below.
                </p>

                <form className="space-y-8" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <select
                            name="rating"
                            defaultValue=""
                            required
                            className="w-full px-4 py-3 rounded-lg bg-white text-black border-2 border-[#29af8a] focus:outline-none"
                        >
                            <option value="" disabled>Select Rating</option>
                            <option value="5">Excellent</option>
                            <option value="4">Very Good</option>
                            <option value="3">Good</option>
                            <option value="2">Fair</option>
                            <option value="1">Poor</option>
                        </select>

                        <textarea
                            name="feedback"
                            rows="5"
                            placeholder="Your Feedback"
                            required
                            className="w-full px-4 py-3 rounded-lg bg-white text-black border-2 border-[#29af8a] focus:outline-none resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full px-4 py-3 rounded-lg bg-[#29af8a] text-white font-semibold hover:bg-white hover:text-black hover:border-2 hover:border-[#29af8a] transition-all duration-300"
                    >
                        Submit Feedback
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Feedback;
