import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const ProblemDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {showButton, buttonText} = location.state;
    const [data, setData] = useState(location.state.data);

    useEffect(() => {
        (async () => {
            if(data.problem.organizationName) {
                try {
                    const response = await axios.get(`/api/v1/profile/${data.problem.uid}?field=all`);
                    setData({...data, organization: response.data});
                } catch(error) {
                    console.log(error);
                }
            }
        })();
    }, []);

    const handleClick = async () => {
        if(buttonText === "Solve Problem") {
            await axios.patch("/api/v1/profile", {
                pid: data.problem._id
            });
        } else {
            await axios.patch("/api/v1/problems", {
                pid: data.problem._id
            }); 
        }

        navigate("/problems/history");
    };

    if(data.problem.organizationName && !data.organization) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <p className="text-2xl font-semibold text-gray-800">Loading Problem Details...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen text-black flex justify-center items-center py-10 mt-20">
            <div className="bg-gray-100 w-[40rem] p-8 rounded-3xl">
                <h1 className="text-3xl font-bold mb-6 text-center">Problem Details</h1>

                <div className="space-y-4">
                    <div>
                        <h3 className="text-gray-700 font-medium">Title</h3>
                        <p className="w-full px-4 py-3 rounded-lg bg-white border-2 border-[#29af8a]">
                            {data.problem.title}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-gray-700 font-medium">Description</h3>
                        <p className="w-full px-4 py-3 rounded-lg bg-white border-2 border-[#29af8a]">
                            {data.problem.description}
                        </p>
                    </div>
                </div>

                {data.problem.organizationName && (
                    <div>
                        <h1 className="text-3xl font-bold mb-6 text-center mt-20">Organization Details</h1>

                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-gray-700 font-medium">Organization Name</h3>
                                    <p className="w-full px-4 py-3 rounded-lg bg-white border-2 border-[#29af8a]">
                                        {data.organization.name}
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-gray-700 font-medium">Organization Type</h3>
                                    <p className="w-full px-4 py-3 rounded-lg bg-white border-2 border-[#29af8a]">
                                        {data.organization.type}
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-gray-700 font-medium">Photo</h3>
                                    <img
                                        src={data.organization.photo}
                                        alt="Organization"
                                        className="w-full h-[18rem] object-contain mx-auto rounded-lg"
                                    />
                                </div>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-gray-800 mb-4">Address</h2>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-gray-700 font-medium">Street Name</h3>
                                        <p className="w-full px-4 py-3 rounded-lg bg-white border-2 border-[#29af8a]">
                                            {data.organization.street}
                                        </p>
                                    </div>

                                    <div className="flex space-x-6">
                                        <div className="w-1/2">
                                            <h3 className="text-gray-700 font-medium">City/Village</h3>
                                            <p className="w-full px-4 py-3 rounded-lg bg-white border-2 border-[#29af8a]">
                                                {data.organization.city}
                                            </p>
                                        </div>

                                        <div className="w-1/2">
                                            <h3 className="text-gray-700 font-medium">District</h3>
                                            <p className="w-full px-4 py-3 rounded-lg bg-white border-2 border-[#29af8a]">
                                                {data.organization.district}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex space-x-6">
                                        <div className="w-1/2">
                                            <h3 className="text-gray-700 font-medium">Pin Code</h3>
                                            <p className="w-full px-4 py-3 rounded-lg bg-white border-2 border-[#29af8a]">
                                                {data.organization.pin}
                                            </p>
                                        </div>

                                        <div className="w-1/2">
                                            <h3 className="text-gray-700 font-medium">Landmark</h3>
                                            <p className="w-full px-4 py-3 rounded-lg bg-white border-2 border-[#29af8a]">
                                                {data.organization.landmark}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>
                                <div className="space-y-4">
                                    <div className="flex space-x-6">
                                        <div className="w-1/2">
                                            <h3 className="text-gray-700 font-medium">Contact Number</h3>
                                            <p className="w-full px-4 py-3 rounded-lg bg-white border-2 border-[#29af8a]">
                                                {data.organization.contact1}
                                            </p>
                                        </div>

                                        <div className="w-1/2">
                                            <h3 className="text-gray-700 font-medium">Alternate Contact Number</h3>
                                            <p className="w-full px-4 py-3 rounded-lg bg-white border-2 border-[#29af8a]">
                                                {data.organization.contact2}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {showButton && (
                    <button
                        type="button"
                        onClick={handleClick}
                        className="w-full px-4 py-3 mt-8 rounded-lg bg-[#29af8a] text-white font-semibold hover:bg-white hover:text-black hover:border-2 hover:border-[#29af8a] transition-all duration-300"
                    >
                        {buttonText}
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProblemDetails;







