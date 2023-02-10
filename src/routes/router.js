import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import ContentComponent from "../component/Layout/ContentComponent";
import Login from "../component/Login/Login";
import UserEdit from "../component/User/user-edit";
import ErrorPage from "../component/ErrorPage/ErrorPage";
import { Routes, Route } from "react-router-dom";
import test from '../component/Common/test'


function Routers() {
    test.aaa();

    return (
    <Routes>
        <Route path="/" element={<ContentComponent />} errorElement={<ErrorPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sys-user" element={<UserEdit />}/>
        <Route path="*" element={<ContentComponent />} />
    </Routes>
    )
  }

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <ContentComponent />,
//         errorElement: <ErrorPage />
//     },
//     {
//         path: "/login",
//         element: <Login />,
//     },
//     {
//         path: "/user",
//         element: <UserEdit />,
//     },
//     {
//         path: "*/*",
//         element: <ErrorPage />,
//     },
// ]);

export default Routers;