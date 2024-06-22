import React from 'react';
import * as ReactDOM from "react-dom/client";
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
]);


function App() {
  return (
    <div className="App">
      {/* <SignupPage></SignupPage> */}
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
