import React, { FC } from 'react';
import Navbar from '../widgets/Navbar';
import SideBar from '../widgets/SideBar';
import { Outlet, Link } from "react-router-dom";
import TopNav from './TopNav';

interface Props {
    // any props that come into the component
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <>
            <div id="wrapper">
                <Navbar />
                {/*   <SideBar/> */}

                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                        <TopNav />
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    ) 
}

export default Layout;

