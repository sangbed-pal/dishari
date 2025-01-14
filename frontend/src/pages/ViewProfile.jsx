import { useEffect, useState } from "react";
import axios from "axios";

const ViewProfile = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("/api/v1/profile/me?field=all");
                setData(response.data);
            } catch(error) {
                console.log(error);
            }
        })();
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
                <h1 className="text-3xl font-bold mb-6 text-center">My Profile</h1>

                <div className="space-y-8">
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-gray-700 font-medium">Organization Name</h3>
                            <p className="w-full px-4 py-3 rounded-lg bg-white border-2 border-[#29af8a]">
                                {data.name}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-gray-700 font-medium">Organization Type</h3>
                            <p className="w-full px-4 py-3 rounded-lg bg-white border-2 border-[#29af8a]">
                                {data.type}
                            </p>
                        </div>

                        {data.category && (
                            <div>
                                <h3 className="text-gray-700 font-medium">Category</h3>
                                <p className="w-full px-4 py-3 rounded-lg bg-white border-2 border-[#29af8a]">
                                    {data.category}
                                </p>
                            </div>
                        )}

                        <div>
                            <h3 className="text-gray-700 font-medium">Photo</h3>
                            <img
                                src={data.photo}
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
                                    {data.street}
                                </p>
                            </div>

                            <div className="flex space-x-6">
                                <div className="w-1/2">
                                    <h3 className="text-gray-700 font-medium">City/Village</h3>
                                    <p className="w-full px-4 py-3 rounded-lg bg-white border-2 border-[#29af8a]">
                                        {data.city}
                                    </p>
                                </div>

                                <div className="w-1/2">
                                    <h3 className="text-gray-700 font-medium">District</h3>
                                    <p className="w-full px-4 py-3 rounded-lg bg-white border-2 border-[#29af8a]">
                                        {data.district}
                                    </p>
                                </div>
                            </div>

                            <div className="flex space-x-6">
                                <div className="w-1/2">
                                    <h3 className="text-gray-700 font-medium">Pin Code</h3>
                                    <p className="w-full px-4 py-3 rounded-lg bg-white border-2 border-[#29af8a]">
                                        {data.pin}
                                    </p>
                                </div>

                                <div className="w-1/2">
                                    <h3 className="text-gray-700 font-medium">Landmark</h3>
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
                            <div className="flex space-x-6">
                                <div className="w-1/2">
                                    <h3 className="text-gray-700 font-medium">Contact Number</h3>
                                    <p className="w-full px-4 py-3 rounded-lg bg-white border-2 border-[#29af8a]">
                                        {data.contact1}
                                    </p>
                                </div>

                                <div className="w-1/2">
                                    <h3 className="text-gray-700 font-medium">Alternate Contact Number</h3>
                                    <p className="w-full px-4 py-3 rounded-lg bg-white border-2 border-[#29af8a]">
                                        {data.contact2}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewProfile;
