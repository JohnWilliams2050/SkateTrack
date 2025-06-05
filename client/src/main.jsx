import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from './routes/Homepage';
import PostListPage from './routes/PostListPage';
import SinglePostPage from './routes/SinglePostPage';
import Write from './routes/Write';
import LoginPage from './routes/LoginPage';
import RegisterPage from './routes/RegisterPage';
import MainLayout from './layouts/MainLayout';
import { ClerkProvider } from '@clerk/clerk-react';
import ClubsPage from './routes/ClubsPage';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MakeActivity from './routes/makeActivity';
import ActivitiesPage from './routes/ActivitiesPage';

const queryClient = new QueryClient();

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children:[
      {
        path:"/",
        element: <Homepage/>,
      },
      {
        path: "/posts",
        element: <PostListPage />,
      },
      {
        path: "/:slug",
        element: <SinglePostPage />,
      },
      {
        path: "/write",
        element: <Write />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/clubs",
        element: <ClubsPage />,
      },
      {
        path: "/new-activity",
        element: <MakeActivity />,
      },
      {
        path: "/activities",
        element: <ActivitiesPage />,        
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <QueryClientProvider client= {queryClient}>
        <RouterProvider router={router} />
        <ToastContainer position="bottom-right"/>
      </QueryClientProvider>
    </ClerkProvider>
  </StrictMode>
);
