import axios from "axios";

const Problems = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Collect form data
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
    
        try {
            await axios.post("/api/v1/organization/problems/submit", data);
        } catch (error) {
            console.error("Error submitting problem:", error);
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
                        {/* Problem Title */}
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter a descriptive problem title"
                            className="w-full px-4 py-3 rounded-lg bg-white text-black border-2 border-[#29af8a] focus:outline-none"
                            required
                        />

                        {/* Problem Description */}
                        <textarea
                            name="description"
                            placeholder="Provide a detailed description of the problem"
                            rows="5"
                            className="w-full px-4 py-3 rounded-lg bg-white text-black border-2 border-[#29af8a] focus:outline-none"
                            required
                        />

                        {/* Estimated Budget */}
                        <input
                            type="number"
                            name="budget"
                            placeholder="Enter estimated budget (in INR)"
                            className="w-full px-4 py-3 rounded-lg bg-white text-black border-2 border-[#29af8a] focus:outline-none"
                            required
                        />

                        {/* Affected People Count */}
                        <input
                            type="number"
                            name="affectedPeopleCount"
                            placeholder="Enter the number of affected people"
                            className="w-full px-4 py-3 rounded-lg bg-white text-black border-2 border-[#29af8a] focus:outline-none"
                            required
                        />

                        {/* Urgency Justification */}
                        <textarea
                            name="urgencyJustification"
                            placeholder="Explain why this problem is urgent"
                            rows="4"
                            className="w-full px-4 py-3 rounded-lg bg-white text-black border-2 border-[#29af8a] focus:outline-none"
                            required
                        />

                        {/* Available Resources */}
                        <textarea
                            name="availableResources"
                            placeholder="Mention any available resources for solving this problem"
                            rows="4"
                            className="w-full px-4 py-3 rounded-lg bg-white text-black border-2 border-[#29af8a] focus:outline-none"
                            required
                        />

                        {/* Problem Category */}
                        <select
                            name="category"
                            className="w-full px-4 py-3 rounded-lg bg-white text-black border-2 border-[#29af8a] focus:outline-none"
                            required
                        >
                            <option value="" disabled selected>
                                Select Problem Category
                            </option>
                            <option value="health">Health & Wellbeing</option>
                            <option value="education">Education</option>
                            <option value="environment">Environment & Sustainability</option>
                            <option value="infrastructure">Infrastructure & Development</option>
                            <option value="technology">Technology & Innovation</option>
                            <option value="social">Social Welfare</option>
                            <option value="other">Other</option>
                        </select>

                        {/* Priority Level */}
                        <select
                            name="priority"
                            className="w-full px-4 py-3 rounded-lg bg-white text-black border-2 border-[#29af8a] focus:outline-none"
                            required
                        >
                            <option value="" disabled selected>
                                Select Priority Level
                            </option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                            <option value="critical">Critical</option>
                        </select>

                        {/* Proposed Deadline */}
                        <label className="block text-sm text-gray-600 font-semibold">
                            Proposed Resolution Deadline:
                        </label>
                        <input
                            type="date"
                            name="deadline"
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

export default Problems;
