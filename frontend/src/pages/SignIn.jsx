import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import axios from "axios";
import signInContext from "../contexts/sign-in-context.js";

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {setIsSignedIn} = useContext(signInContext);
    const navigate = useNavigate();
    
    const handleSignIn = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            await axios.post("/api/v1/token", data);

            setIsSignedIn(true);
            navigate("/");
        } catch(error) {
            console.log(error);
        }
    };

    return (
        <div className="relative h-screen bg-white text-black">
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="bg-[#29af8a] bg-opacity-90 rounded-3xl shadow-lg p-12 w-[30rem]">
                    <h1 className="text-3xl font-bold text-white mb-4 text-center">Sign In</h1>
                    <p className="text-white text-sm mb-8 text-center">
                        Welcome back! Please enter your details to sign in.
                    </p>

                    <form className="space-y-6" onSubmit={handleSignIn}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 rounded-3xl bg-white text-black border-2 border-[#29af8a] focus:outline-none focus:border-black placeholder-gray-400"
                            required
                        />

                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Enter your password"
                                required
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
                            type="submit"
                            className="w-full bg-white text-black py-3 rounded-3xl font-semibold border-2 border-[#29af8a] focus:outline-none hover:bg-[#29af8a] hover:text-white hover:border-white transition duration-300"
                        >
                            Sign In
                        </button>
                    </form>

                    <div className="text-center space-y-4 mt-6">
                        <p className="text-white text-sm">
                            Don’t have an account?{" "}
                            <Link to="/sign-up" className="text-white font-semibold">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;