import React, { FC } from 'react';
import { Link } from 'react-router-dom';
interface Props {
    // any props that come into the component
}

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion p-0" style={{ backgroundColor: "#fe9329 !important" }}>
                <div className="container d-flex flex-column p-0"><img src="assets/img/assets/logo125.png" style={{ fontSize: "20px", height: "5pc", marginTop: "20px" }} /><a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
                    <div className="sidebar-brand-icon rotate-n-15"></div>
                    <div className="sidebar-brand-text mx-3"><span style={{ fontSize: "20px" }} >PULSEBOOK</span></div>
                </a>
                    <hr className="sidebar-divider my-0" />
                    <ul className="navbar-nav text-light" id="accordionSidebar">
                        <li className="nav-item"></li>
                        <li className="nav-item"></li>
                        <li className="nav-item"></li>
                        <li className="nav-item"></li>
                        <li className="nav-item"></li>
                        <li className="nav-item"></li>
                        <li className="nav-item"></li>
                        <li className="nav-item"><Link className="nav-link active" to="/"><i className="fa fa-book" style={{ fontSize: "20px" }}></i>
                            <span style={{ fontSize: "16px", paddingLeft: "5px" }}>Liste des livres</span></Link><Link className="nav-link" to="/auteur/list"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-person-bounding-box" style={{ fontSize: "20px" }} >
                                <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"></path>
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
                            </svg><span style={{ fontSize: '16px', paddingLeft: ' 5px' }}>&nbsp;liste des Auteur</span></Link><Link className="nav-link" to="/utilisateur/list"><i className="fa fa-users" style={{ fontSize: "20px" }}></i><span style={{ fontSize: "16px", paddingLeft: "5px" }}>Liste des utilisateur</span></Link>
                            <Link className="nav-link" to="/author/become">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-person-lines-fill" style={{ fontSize: "20px" }}>
                                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"></path>
                            </svg><span style={{ fontSize: "16px", paddingLeft: "5px" }}>Devenir auteur</span>
                            </Link>
                            
                            <Link className="nav-link active" to="/category/list"><i className="fa fa-american-sign-language-interpreting" style={{ fontSize: "20px" }} ></i><span style={{ fontSize: "16px" }} >Category</span></Link></li>
                    </ul>
                    <div className="text-center d-none d-md-inline"><button className="btn rounded-circle border-0" id="sidebarToggle" type="button"></button></div>
                </div>
            </nav>
            
        </>
    )
}

export default Navbar;