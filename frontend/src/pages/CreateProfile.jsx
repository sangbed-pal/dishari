import { useNavigate } from "react-router-dom";
import { FiUpload } from "react-icons/fi";
import axios from "axios";

const CreateProfile = () => {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        try {
            await axios.post("/api/v1/profile", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            });

            navigate("/");
        } catch(error) {
            console.log(error);
        }
    };

    return (
        <div className="min-h-screen text-black flex justify-center items-center py-10">
            <div className="bg-gray-100 w-[40rem] p-8 rounded-3xl">
                <h1 className="text-3xl font-bold mb-6 text-center">Complete Your Profile</h1>
                <p className="text-gray-600 text-sm mb-10 text-center">
                    Provide the details below to complete your profile.
                </p>

                <form className="space-y-8" onSubmit={handleSubmit}>
                    <div>
                        <div className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Organization Name"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-white text-black border-2 border-[#29af8a] focus:outline-none"
                            />

                            <select
                                name="type"
                                className="w-full px-4 py-3 rounded-lg bg-white text-black border-2 border-[#29af8a] focus:outline-none"
                                defaultValue=""
                                required
                            >
                                <option value="" disabled>Organization Type</option>
                                
                                <option value="school">Government School</option>
                                <option value="hospital">Government Hospital</option>
                                <option value="ngo">Non-governmental Organisation (NGO)</option>
                            </select>

                            <div>
                                <label
                                    htmlFor="file-upload"
                                    className="w-full px-4 py-3 rounded-lg bg-[#29af8a] text-white flex justify-center items-center cursor-pointer hover:bg-white hover:text-black hover:border-2 hover:border-[#29af8a] transition-all duration-300"
                                >
                                    <FiUpload className="h-5 w-5 mr-2" />
                                    Upload Photo
                                </label>
                                <input
                                    type="file"
                                    name="photo"
                                    required
                                    id="file-upload"
                                    className="hidden"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Address</h2>
                        <div className="space-y-4">
                            <input
                                type="text"
                                name="street"
                                placeholder="Street Name"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-white text-black border-2 border-[#29af8a] focus:outline-none"
                            />
                            <div className="flex space-x-4">
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="City/Village"
                                    required
                                    className="w-1/2 px-4 py-3 rounded-lg bg-white text-black border-2 border-[#29af8a] focus:outline-none"
                                />
                                <input
                                    type="text"
                                    name="district"
                                    placeholder="District"
                                    required
                                    className="w-1/2 px-4 py-3 rounded-lg bg-white text-black border-2 border-[#29af8a] focus:outline-none"
                                />
                            </div>
                            <div className="flex space-x-4">
                                <input
                                    type="number"
                                    name="pin"
                                    placeholder="Pin Code"
                                    required
                                    className="w-1/2 px-4 py-3 rounded-lg bg-white text-black border-2 border-[#29af8a] focus:outline-none"
                                />
                                <input
                                    type="text"
                                    name="landmark"
                                    placeholder="Landmark"
                                    required
                                    className="w-1/2 px-4 py-3 rounded-lg bg-white text-black border-2 border-[#29af8a] focus:outline-none"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>
                        <div className="space-y-4">
                            <input
                                type="tel"
                                name="contact1"
                                placeholder="Contact Number"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-white text-black border-2 border-[#29af8a] focus:outline-none"
                            />
                            <input
                                type="tel"
                                name="contact2"
                                placeholder="Alternate Contact Number"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-white text-black border-2 border-[#29af8a] focus:outline-none"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full px-4 py-3 rounded-lg bg-[#29af8a] text-white font-semibold hover:bg-white hover:text-black hover:border-2 hover:border-[#29af8a] transition-all duration-300"
                    >
                        Save Profile
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateProfile;
