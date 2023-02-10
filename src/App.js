import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Decimal from 'decimal.js';
import FormComponent from "./component/Common/FormComponent";
import HeaderComponent from "./component/Layout/HeaderComponent";
import SideNaviComponent from "./component/Layout/SideNaviComponent";
import ContentComponent from "./component/Layout/ContentComponent";
import Login from "./component/Login/Login";
import UserEdit from "./component/User/user-edit";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap-icons/font/bootstrap-icons.css';
// import "./css/index.css"
// import "./css/layout.css"
import Routers from "./routes/router"
import { createBrowserRouter, RouterProvider, Routes, BrowserRouter as Router } from "react-router-dom";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import {ContentWrapper} from './styledComponent/layout'

const App = () =>{
    return (
        <Router>
            <HeaderComponent />
            <SideNaviComponent />
            <ContentWrapper>
                <Routers />
            </ContentWrapper>
        </Router>
    )
}



export default App
// <div className="layout-fixed">
//     <div className="wrapper">
//             <div className="topnavbar-wrapper">
//                 <div className="navbar topnavbar">
//                     <HeaderComponent />
//                 </div>
//             </div>
//             <Router>
//                 <div className="aside-container">
//                     <div className="aside-inner">
//                         <SideNaviComponent />
//                     </div>
//                 </div>
//                 <section className="section-container">
//                     <div className="content-wrapper">
//                         <Routers />
//                     </div>
//                 </section>
//             </Router>
//     </div>
// </div>

// <div className="wrapper">
//     <div className="topnavbar-wrapper">
//         <HeaderComponent />
//     </div>
//     <div className="aside-container">
//         <SideNaviComponent />
//     </div>
//     {/* <ContentComponent className="offsidebar" /> */}
//     <section className="section-container">
//         <div className="content-wrapper">
//             <Login />
//         </div>
//     </section>
// </div>