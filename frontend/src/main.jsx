import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Home from "./pages/Home.jsx";
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import CreateProfile from "./pages/CreateProfile.jsx";
import ViewProfile from './pages/ViewProfile.jsx';
import ViewProblems from './pages/ViewProblems.jsx';
import SubmitProblems from './pages/SubmitProblems.jsx';
import ProblemDetails from './pages/ProblemDetails.jsx';
import ProblemHistory from './pages/ProblemHistory.jsx';
import Feedback from './pages/Feedback.jsx';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ContextProvider from './contexts/ContextProvider.jsx';

const router = createBrowserRouter([
    {
        path: "/sign-in",
        element: <SignIn />
    },

    {
        path: "/sign-up",
        element: <SignUp />
    },

    {
        path: "/profile/create",
        element: <CreateProfile />
    },

    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            },

            {
                path: "profile/view",
                element: <ViewProfile />
            },

            {
                path: "problems/view",
                element: <ViewProblems />
            },

            {
                path: "problems/submit",
                element: <SubmitProblems />
            },

            {
                path: "problems/history",
                element: <ProblemHistory />
            },

            {
                path: "problems/details",
                element: <ProblemDetails />
            },

            {
                path: "feedback",
                element: <Feedback />
            }
        ]
    }
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ContextProvider>
            <RouterProvider router={router} />
        </ContextProvider>
    </StrictMode>,
);
