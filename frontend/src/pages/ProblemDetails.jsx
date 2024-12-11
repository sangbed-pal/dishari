import { useLocation } from "react-router-dom";

const ProblemDetails = () => {
    const location = useLocation();
    const data = location.state;

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

                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <h3 className="text-gray-700 font-medium">Category</h3>
                            <p className="w-full px-4 py-3 rounded-lg bg-white border-2 border-[#29af8a] capitalize">
                                {data.problem.category}
                            </p>
                        </div>

                        <div className="w-1/2">
                            <h3 className="text-gray-700 font-medium">Priority</h3>
                            <p className="w-full px-4 py-3 rounded-lg bg-white border-2 border-[#29af8a] capitalize">
                                {data.problem.priority}
                            </p>
                        </div>
                    </div>
                </div>

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

                            <div>
                                <h3 className="text-gray-700 font-medium">Email</h3>
                                <p className="w-full px-4 py-3 rounded-lg bg-white border-2 border-[#29af8a]">
                                    {data.organization.email}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={() => { }}
                    className="w-full px-4 py-3 mt-8 rounded-lg bg-[#29af8a] text-white font-semibold hover:bg-white hover:text-black hover:border-2 hover:border-[#29af8a] transition-all duration-300"
                >
                    Solve Problem
                </button>
            </div>
        </div>
    );
};

export default ProblemDetails;







