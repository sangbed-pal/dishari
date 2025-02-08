import { NavLink, Link, useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import signInContext from "../contexts/sign-in-context.js";
import organizationContext from "../contexts/organization-context.js";
import axios from "axios";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
    const navigate = useNavigate();

    const {isSignedIn, setIsSignedIn} = useContext(signInContext);
    const {organizationType, setOrganizationType} = useContext(organizationContext);

    const [show, setShow] = useState(false) // to handle reponsiveness
    
    useEffect(() => {
        (async () => {
            try {
                const response1 = await axios.get("/api/v1/token/status");
                const status = response1.data.status;

                if(status === "Valid") {
                    setIsSignedIn(true);
                }

                const response2 = await axios.get("/api/v1/profile/me?field=type");
                setOrganizationType(response2.data.type);
            } catch(error) {
                console.log(error);
            }
        })();
    }, []);

    const handleSignOut = async () => {
        try {
            await axios.delete("/api/v1/token");
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
        <>
            <nav className="bg-gray-100 py-4 px-8 min-h-20 flex fixed top-0 w-full z-50 mb-4">    
                
                <div className="fixed flex items-center container text-lg">
                    <div>
                        <h1 className="text-[#29af8a] text-5xl font-serif">Dishari</h1>
                    </div>
                    <div className="mx-6">
                        <ul className="hidden md:flex space-x-6"> {/* remains hidden in small devices */}
                            {isSignedIn && (
                                <>              
                                    {organizationType === "ngo"
                                        ? links1.map((link, index) => (
                                            <NavLink
                                                key={link}
                                                to={routes1[index]}
                                                className={({isActive}) => isActive ? activeLinkStyles : defaultLinkStyles}
                                            >
                                                {link}
                                            </NavLink>
                                        ))
                                        : links2.map((link, index) => (
                                            <NavLink
                                                key={link}
                                                to={routes2[index]}                                        
                                                className={({isActive}) => isActive ? activeLinkStyles : defaultLinkStyles}
                                            >
                                                {link}
                                            </NavLink>
                                        ))}
                                    <button
                                        className="px-5 py-1 rounded-3xl bg-[#29af8a] text-white hover:bg-white hover:text-black hover:border-2 hover:border-[#29af8a] transition-all duration-300"
                                        onClick={handleSignOut}
                                    >
                                        Sign Out
                                    </button>
                                </>
                            )}
                        </ul>               
                    </div>            
                    
                    {!isSignedIn ? (
                        <Link to="/sign-in">
                            <button className="px-5 py-1 rounded-3xl bg-[#29af8a] text-white hover:bg-white hover:text-black hover:border-2 hover:border-[#29af8a] transition-all duration-300">
                                Sign In
                            </button>
                        </Link>
                    ) : (
                        <div className="md:hidden" onClick={() => setShow(!show)}>
                            {show ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />} {/* onclicking, the icons interchanges */}
                        </div>
                    )}
                </div>

                {/* Mobile navbar */}
                {show && (                    
                    <ul>
                        {isSignedIn && (   
                            <div className="h-screen flex flex-col items-center justify-center space-y-3 md:hidden text-xl">                 
                                {organizationType === "ngo"
                                    ? links1.map((link, index) => (
                                        <NavLink
                                            key={link}
                                            to={routes1[index]}
                                            onClick={() => setShow(!show)}
                                            smooth="true"
                                            duration={500}
                                            offset={-70}
                                            activeClass="active"
                                            className={({isActive}) => isActive ? activeLinkStyles : defaultLinkStyles}
                                        >
                                            {link}
                                        </NavLink>
                                    ))
                                    : links2.map((link, index) => (
                                        <NavLink
                                            key={link}
                                            to={routes2[index]}
                                            onClick={() => setShow(!show)}
                                            smooth="true"
                                            duration={500}
                                            offset={-70}
                                            activeClass="active"
                                            className={({isActive}) => isActive ? activeLinkStyles : defaultLinkStyles}
                                        >
                                            {link}
                                        </NavLink>
                                    ))}
                                <button
                                    className="px-5 py-1 rounded-3xl bg-[#29af8a] text-white hover:bg-white hover:text-black hover:border-2 hover:border-[#29af8a] transition-all duration-300"
                                    onClick={handleSignOut}
                                >
                                    Sign Out
                                </button>
                            </div>
                        )}
                    </ul>                    
                )}
            </nav>
        </>
    );
};

export default Header;
