import { FiUpload } from "react-icons/fi";
import { useState } from "react";

const Problems = () => {
    const [videoFile, setVideoFile] = useState(null);

    const handleVideoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setVideoFile(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="min-h-screen text-black flex justify-center items-center py-10">
            <div className="bg-gray-100 w-[40rem] p-8 rounded-3xl mt-20">
                <h1 className="text-3xl font-bold mb-6 text-center">Submit a Problem</h1>
                <p className="text-gray-600 text-sm mb-10 text-center">
                    Provide the details below to submit your problem.
                </p>

                <form className="space-y-8" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <input
                            type="text"
                            name="title"
                            placeholder="Problem Title"
                            className="w-full px-4 py-3 rounded-lg bg-white text-black border-2 border-[#29af8a] focus:outline-none"
                        />

                        <textarea
                            name="description"
                            placeholder="Problem Description"
                            rows="5"
                            className="w-full px-4 py-3 rounded-lg bg-white text-black border-2 border-[#29af8a] focus:outline-none"
                        />

                        <div>
                            <label
                                htmlFor="video-upload"
                                className="w-full h-40 flex justify-center items-center bg-white text-black border-2 border-[#29af8a] rounded-lg cursor-pointer hover:bg-gray-100"
                            >
                                {videoFile ? (
                                    <video
                                        src={URL.createObjectURL(videoFile)}
                                        controls
                                        className="h-full w-full rounded-lg object-cover"
                                    />
                                ) : (
                                    <div className="flex items-center space-x-2">
                                        <FiUpload className="h-6 w-6" />
                                        <span className="font-semibold text-lg">Upload Video</span>
                                    </div>
                                )}
                            </label>
                            <input
                                type="file"
                                name="video"
                                id="video-upload"
                                accept="video/*"
                                className="hidden"
                                onChange={handleVideoUpload}
                            />
                        </div>

                        <input
                            type="number"
                            name="budget"
                            placeholder="Estimated Budget (in INR)"
                            className="w-full px-4 py-3 rounded-lg bg-white text-black border-2 border-[#29af8a] focus:outline-none"
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
