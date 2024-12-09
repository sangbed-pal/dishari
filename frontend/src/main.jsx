import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Home from "./pages/Home.jsx";
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import CreateProfile from "./pages/CreateProfile.jsx";
import ViewProfile from './pages/ViewProfile.jsx';
import Problems from './pages/Problems.jsx';
import Feedback from './pages/Feedback.jsx';
import Chat from './pages/Chat.jsx';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SignInContextProvider from './contexts/SignInContextProvider.jsx';

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
                path: "problems",
                element: <Problems />
            },

            {
                path: "feedback",
                element: <Feedback />
            },

            {
                path: "chat",
                element: <Chat />
            }
        ]
    }
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <SignInContextProvider>
            <RouterProvider router={router} />
        </SignInContextProvider>
    </StrictMode>,
);
