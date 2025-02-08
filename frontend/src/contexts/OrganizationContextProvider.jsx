import { useState } from "react";
import organizationContext from "./organization-context.js";

const OrganizationContextProvider = ({children}) => {
    const [organizationType, setOrganizationType] = useState("");

    return (
        <organizationContext.Provider value={{organizationType, setOrganizationType}}>
            {children}
        </organizationContext.Provider>
    );
};

export default OrganizationContextProvider;