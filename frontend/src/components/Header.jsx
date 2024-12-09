import { NavLink, Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import signInContext from "../contexts/sign-in-context.js";
import axios from "axios";

const Header = () => {
    const navigate = useNavigate();
    const {hasSignedIn, setHasSignedIn} = useContext(signInContext);

    const handleSignOut = async () => {
        try {
            await axios.post("/api/v1/user/sign-out");
        } catch(error) {
            console.log(error);
        }

        setHasSignedIn(false);
        navigate("/");
    };

    const activeLinkStyles = "text-black font-bold";
    const defaultLinkStyles = "text-[#29af8a] font-bold hover:text-black transition-all duration-300";

    const links = ["Home", "Profile", "Problems", "Feedback", "Chat"];
    const routes = ["/", "/profile/view", "/problems", "/feedback", "/chat"];

    return (
        <header className="bg-gray-100 py-4 px-8 flex justify-between items-center fixed top-0 w-full z-50">
            <h1 className="text-[#29af8a] text-5xl font-serif">Dishari</h1>

            <div className="flex items-center space-x-8 text-lg">
                {hasSignedIn &&
                    links.map((link, index) => (
                        <NavLink
                            key={link}
                            to={routes[index]}
                            className={({isActive}) => isActive ? activeLinkStyles : defaultLinkStyles}
                        >
                            {link}
                        </NavLink>
                    ))
                }

                {!hasSignedIn ? (
                    <Link to="/sign-in">
                        <button className="px-5 py-1 rounded-3xl bg-[#29af8a] text-white hover:bg-white hover:text-black hover:border-2 hover:border-[#29af8a] transition-all duration-300">
                            Sign In
                        </button>
                    </Link>
                ) : (
                    <button className="px-5 py-1 rounded-3xl bg-[#29af8a] text-white hover:bg-white hover:text-black hover:border-2 hover:border-[#29af8a] transition-all duration-300" onClick={handleSignOut}>
                        Sign Out
                    </button>
                )}
            </div>
        </header>
    );
};

export default Header;
