import React, { FC } from 'react';
import Navbar from '../widgets/Navbar';
import SideBar from '../widgets/SideBar';
import { Outlet, Link } from "react-router-dom";

interface Props {
    // any props that come into the component
}

const Auth: FC<Props> = ({ children }) => {
    return (
        <div style={{backgroundColor:"#fe9329 !important",backgroundImage: "linear-gradient(180deg,#fe9329 10% ,#fe9329 100%)",backgroundSize:"cover"}}>

            <div className="container" style={{ backgroundColor: "#fe9329 !important" }}>
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-12 col-xl-10 mx-5 px-5" style={{ backgroundColor: "#fe9329 !important" }}>
                        <div className="card shadow-lg o-hidden border-0 my-5 mx-5">
                            <div className="card-body p-0 px-5 mx-5">
                                <div className="row mx-5">
                                    <Outlet />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;



