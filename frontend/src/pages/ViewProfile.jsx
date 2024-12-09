import { useEffect, useState } from "react";
import axios from "axios";

const ViewProfile = () => {
    const [data, setData] = useState(null);

    // Fetch profile data on component load
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/api/v1/organization/profile/get");
                setData(response.data);
            } catch (error) {
                console.error("Error fetching profile data:", error);
            }
        };
        fetchData();
    }, []);

    if (!data) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <p className="text-2xl font-semibold text-gray-800">Loading Profile...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen text-black flex justify-center items-center py-10 mt-20">
            <div className="bg-gray-100 w-[40rem] p-8 rounded-3xl">
                <h1 className="text-3xl font-bold mb-6 text-center">Profile Details</h1>

                <div className="space-y-8">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Organization Information</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="text-gray-700 font-medium">Organization Name</label>
                                <p className="w-full px-4 py-3 rounded-lg bg-white border-2 border-[#29af8a]">
                                    {data.name}
                                </p>
                            </div>
                            <div>
                                <label className="text-gray-700 font-medium">Organization Type</label>
                                <p className="w-full px-4 py-3 rounded-lg bg-white border-2 border-[#29af8a]">
                                    {data.type}
                                </p>
                            </div>
                            <div>
                                <label className="text-gray-700 font-medium">Uploaded Photo</label>
                                <img
                                    src={data.photo}
                                    alt="Organization"
                                    className="w-40 h-40 object-cover rounded-lg border-2 border-[#29af8a] mx-auto"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Address</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="text-gray-700 font-medium">Street Name</label>
                                <p className="w-full px-4 py-3 rounded-lg bg-white border-2 border-[#29af8a]">
                                    {data.street}
                                </p>
                            </div>
                            <div className="flex space-x-4">
                                <div>
                                    <label className="text-gray-700 font-medium">City/Village</label>
                                    <p className="w-full px-4 py-3 rounded-lg bg-white border-2 border-[#29af8a]">
                                        {data.city}
                                    </p>
                                </div>
                                <div>
                                    <label className="text-gray-700 font-medium">District</label>
                                    <p className="w-full px-4 py-3 rounded-lg bg-white border-2 border-[#29af8a]">
                                        {data.district}
                                    </p>
                                </div>
                            </div>
                            <div className="flex space-x-4">
                                <div>
                                    <label className="text-gray-700 font-medium">Pin Code</label>
                                    <p className="w-full px-4 py-3 rounded-lg bg-white border-2 border-[#29af8a]">
                                        {data.pin}
                                    </p>
                                </div>
                                <div>
                                    <label className="text-gray-700 font-medium">Landmark</label>
                                    <p className="w-full px-4 py-3 rounded-lg bg-white border-2 border-[#29af8a]">
                                        {data.landmark}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="text-gray-700 font-medium">Contact Number</label>
                                <p className="w-full px-4 py-3 rounded-lg bg-white border-2 border-[#29af8a]">
                                    {data.contact1}
                                </p>
                            </div>
                            <div>
                                <label className="text-gray-700 font-medium">Alternate Contact Number</label>
                                <p className="w-full px-4 py-3 rounded-lg bg-white border-2 border-[#29af8a]">
                                    {data.contact2}
                                </p>
                            </div>
                            <div>
                                <label className="text-gray-700 font-medium">Email</label>
                                <p className="w-full px-4 py-3 rounded-lg bg-white border-2 border-[#29af8a]">
                                    {data.email}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewProfile;
