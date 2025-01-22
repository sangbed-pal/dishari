import { useState } from "react";
import signInContext from "./sign-in-context.js";

const SignInContextProvider = ({children}) => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    return (
       <signInContext.Provider value={{isSignedIn, setIsSignedIn}}>
            {children}
       </signInContext.Provider> 
    );
}

export default SignInContextProvider;