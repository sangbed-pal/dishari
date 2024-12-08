import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import signInContext from "../contexts/sign-in-context.js";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const {setHasSignedIn} = useContext(signInContext);

    const handleSignUp = async () => {
        try {
            await axios.post("/api/v1/user/register", {
                email,
                password
            });

            setHasSignedIn(true);
            navigate("/profile/create");
        } catch(error) {
            console.error(error);
        }
    };

    return (
        <div className="relative h-screen bg-white text-black">
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="bg-[#29af8a] bg-opacity-90 rounded-3xl shadow-lg p-12 w-[30rem]">
                    <h1 className="text-3xl font-bold text-white mb-4 text-center">Sign Up</h1>
                    <p className="text-white text-sm mb-8 text-center">
                        Create your account by filling in the details below.
                    </p>

                    <form className="space-y-6">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-3xl bg-white text-black border-2 border-[#29af8a] focus:outline-none focus:border-black placeholder-gray-400"
                        />

                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 rounded-3xl bg-white text-black border-2 border-[#29af8a] focus:outline-none focus:border-black placeholder-gray-400"
                            />

                            <button
                                type="button"
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <FiEyeOff className="h-5 w-5" />
                                ) : (
                                    <FiEye className="h-5 w-5" />
                                )}
                            </button>
                        </div>

                        <button
                            type="button"
                            className="w-full bg-white text-black py-3 rounded-3xl font-semibold border-2 border-[#29af8a] focus:outline-none hover:bg-[#29af8a] hover:text-white hover:border-2 hover:border-white transition duration-300"
                            onClick={handleSignUp}
                        >
                            Sign Up
                        </button>
                    </form>

                    <div className="text-center space-y-4 mt-6">
                        <p className="text-white text-sm">
                            Already have an account?{" "}
                            <Link to="/sign-in" className="text-white font-semibold">
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
