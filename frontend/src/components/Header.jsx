import { NavLink, Link, useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import signInContext from "../contexts/sign-in-context.js";
import organizationContext from "../contexts/organization-context.js";
import axios from "axios";

const Header = () => {
    const navigate = useNavigate();

    const {isSignedIn, setIsSignedIn} = useContext(signInContext);
    const {organizationType, setOrganizationType} = useContext(organizationContext);
    
    useEffect(() => {
        (async () => {
            try {
                const response1 = await axios.get("/api/v1/auth/is-signed-in");
                setIsSignedIn(response1.data);

                const response2 = await axios.get("/api/v1/organization/type");
                setOrganizationType(response2.data);
            } catch(error) {
                console.log(error);
            }
        })();
    }, []);

    const handleSignOut = async () => {
        try {
            await axios.post("/api/v1/auth/sign-out");
        } catch(error) {
            console.log(error);
        }

        setIsSignedIn(false);
        navigate("/");
    };

    const activeLinkStyles = "text-black font-bold";
    const defaultLinkStyles = "text-[#29af8a] font-bold hover:text-black transition-all duration-300";

    const links1 = ["Home", "Profile", "View Problems", "Problem History", "Feedback"];
    const routes1 = ["/", "/profile/view", "/problems/view", "/problems/history", "/feedback"];

    const links2 = ["Home", "Profile", "Submit Problems", "Problem History", "Feedback"];
    const routes2 = ["/", "/profile/view", "/problems/submit", "/problems/history", "/feedback"];

    return (
        <header className="bg-gray-100 py-4 px-8 flex justify-between items-center fixed top-0 w-full z-50">
            <h1 className="text-[#29af8a] text-5xl font-serif">Dishari</h1>

            <div className="flex items-center space-x-8 text-lg">
                {isSignedIn && (
                    organizationType === "ngo" ? (
                        links1.map((link, index) => (
                            <NavLink
                                key={link}
                                to={routes1[index]}
                                className={({isActive}) => isActive ? activeLinkStyles : defaultLinkStyles}
                            >
                                {link}
                            </NavLink>
                        ))
                    ) : (
                        links2.map((link, index) => (
                            <NavLink
                                key={link}
                                to={routes2[index]}
                                className={({isActive}) => isActive ? activeLinkStyles : defaultLinkStyles}
                            >
                                {link}
                            </NavLink>
                        ))
                    )
                )}

                {!isSignedIn ? (
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
