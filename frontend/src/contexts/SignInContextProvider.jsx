import { useState } from "react";
import signInContext from "./sign-in-context.js";

function SignInContextProvider({children}) {
    const [hasSignedIn, setHasSignedIn] = useState(false);

    return (
       <signInContext.Provider value={{hasSignedIn, setHasSignedIn}}>
            {children}
       </signInContext.Provider> 
    );
}

export default SignInContextProvider;