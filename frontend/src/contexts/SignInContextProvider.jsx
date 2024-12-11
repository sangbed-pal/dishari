import { useState } from "react";
import signInContext from "./sign-in-context.js";

function SignInContextProvider({children}) {
    const [isSignedIn, setIsSignedIn] = useState(false);

    return (
       <signInContext.Provider value={{isSignedIn, setIsSignedIn}}>
            {children}
       </signInContext.Provider> 
    );
}

export default SignInContextProvider;