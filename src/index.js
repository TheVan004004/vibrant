import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SignUp from './pages/SignUp';
import Header from './layout/Header';
import Footer from './layout/Footer';
import {
  ContextWrapper
} from './context/context';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import User from './pages/User';
import ErrorPage from './pages/Error';
import PrivateRoute from './pages/Private.Router';
import SearchPage from './pages/SearchPage';
import Homepage from './pages/Homepage';
import Friend from './pages/Friend';
import Profile from './user/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <>
          <Header></Header>
          <SearchPage />
          <Footer></Footer>
        </>
      },
      {
        path: "/search",
        element: <>
          <Header></Header>
          <SearchPage />
          <Footer></Footer>
        </>
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/user",
        element: <PrivateRoute>
          <Header></Header>
          <User />
          <Footer></Footer>
        </PrivateRoute>
      },
      {
        path: "/friend",
        element: <PrivateRoute>
          <Header></Header>
          <Friend />
          <Footer></Footer>
        </PrivateRoute>
      },
      {
        path: "/homepage",
        element: <PrivateRoute>
          <Header></Header>
          <Homepage />
          <Footer></Footer>
        </PrivateRoute>
      }
    ]
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextWrapper>
    {/* <React.StrictMode> */}
    <RouterProvider router={router} />
    {/* </React.StrictMode> */}
  </ContextWrapper>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
