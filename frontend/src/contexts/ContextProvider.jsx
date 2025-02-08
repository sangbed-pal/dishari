import SignInContextProvider from "./SignInContextProvider.jsx";
import OrganizationContextProvider from "./OrganizationContextProvider.jsx";

const ContextProvider = ({children}) => {
    return (
        <SignInContextProvider>
            <OrganizationContextProvider>
                {children}
            </OrganizationContextProvider>
        </SignInContextProvider>
    );
};

export default ContextProvider;
