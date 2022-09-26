import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import ApiContext from '../../context/ApiContext';
import { BookAdd } from './BookAdd';
import { BookEdit } from './BookEdit';
import { BookView } from './BookView';


function Home() {

    const Api: any = useContext(ApiContext);

    const [books, setbooks] = useState<any>([]);
    const [allLinks, setLinks] = useState<any>([]);
    const [isload, setload] = useState(true);
    const [CurentAuthorData, setCurrentAuthoData] = useState<any>([]);
    const [authors, setauthor] = useState<any>([]);
    const [category, setCategory] = useState<any>([]);
    const [AuthorForSearch, setAuthorForSearch] = useState<any>([]);
    const [UserForSearch, setUserForSearch] = useState<any>([]);
    const [nbBook, setnbBook] = useState(0);

    const [nbuser, setnbuser] = useState(0)
    const [nbauthor, setnbauthor] = useState(0)
    const [nbdemande, setnbdemande] = useState(0)

    const getUser = async (data: any) => {
        const user = JSON.parse(data);
        console.log(user);
        
    }

    const init = () => {
        const userdata = localStorage.getItem("isAuthenticated");
        if (userdata) {
            getUser(userdata)
        } else {
            window.location.replace("/login");
        }
        console.log("no user data for me");
        
    }


    useEffect(() => {
        init();
        getCategory();
        getBooks(null);
        getUsers();
        getstatistiqueNblibre();
        getstatistiqueNbAuthor();
        getstatistiqueNbUser();
        getstatistiqueNbDemande();
        /*       getAuthor();
              getUser(); */
        console.log(books);


    }, [])

    const getBooks = async (url: any) => {
        setload(true);


        var response = url == null ? await Api.getData('getbooks') : await axios.get(url);
        console.log("ok server 125487");

        //   console.log(response.data.data);


        if (response.status == 200) {
            if (response.data.data.data.length > 0) {
                setload(false);
                setbooks(response.data.data);
                setLinks(response.data.data.links);


                console.log(response.data.data.links);

            }
            else {
                setload(true);
            }
        }
    }
    const setUserInfo = async (data: any) => {
        setCurrentAuthoData(data);
    }

    const getUsers = async () => {


        var response = await Api.getData('listeutilisateur');

        //   console.log(response.data.data);


        if (response.status == 200) {
            if (response.data.data.length > 0) {
                console.log("ok server 2");


                setauthor(response.data.data);


                console.log(response.data.data);

            }
            else {

            }
        } else {
            console.log("ok server 125487");

        }
    }
    const getCategory = async () => {

        console.log("server response");

        var response = await Api.getData('category/list');
        console.log("server response franky steve");

        console.log(response.data);


        if (response.status == 200) {
            if (response.data.data.length > 0) {
                console.log("ok server 2");
                setCategory(response.data.data);
                console.log(response.data.data);

            }
            else {

            }
        } else {
            console.log("ok server 125487");

        }
    }

    /*  const getAuthor = async () => {
         console.log("authors datat from server");
 
         var responseAuthor = await Api.getData("getAuthorlistbyauthor");
         console.log("authors datat from server 2154");
 
         console.log(responseAuthor.data.data);
 
         if (responseAuthor.data.success) {
             setAuthorForSearch(responseAuthor.data.data)
         }
 
 
     }
 
     const getUser = async () => {
 
         var responseAuthor = await Api.getData("getAuthorlist");
         console.log("user data from server");
 
         console.log(responseAuthor.data.data);
 
         if (responseAuthor.data.success) {
             setUserForSearch(responseAuthor.data.data)
         }
 
 
     } */

    const handler = async (event: any) => {
        const value = event.target.value
        console.log("searchBookByAuthor");

        console.log(value);
        const credentials = {

            'key': value,

        }
        var responseAuthor = await Api.postData("searchBookByAuthor", credentials);
        console.log("user data from server");

        console.log(responseAuthor.data.data);

        if (responseAuthor.data.success) {
            setbooks(responseAuthor.data.data);
            setLinks(responseAuthor.data.data.links);
        }

    }

    const getstatistiqueNblibre = async () => {
        var nbBook = Api.getData("getNbBook")
        console.log("book from server is ok");
        console.log(nbBook.data);
        if (nbBook.data.success) {
            setnbBook(nbBook.data.data.data);
        }
    }
    const getstatistiqueNbUser = async () => {
        var nbBook = Api.getData("getNbUser")
        console.log(nbBook);
        if (nbBook.data.success) {
            setnbuser(nbBook.data.data.data);
        }
    }
    const getstatistiqueNbAuthor = async () => {
        var nbBook = Api.getData("getNbAuthor")
        console.log(nbBook);
        if (nbBook.data.success) {
            setnbauthor(nbBook.data.data.data);
        }
    }
    const getstatistiqueNbDemande = async () => {
        var nbBook = Api.getData("getNbDemande")
        console.log(nbBook.data.data.data);
        if (nbBook.data.success) {
            setnbdemande(nbBook.data.data.data);
        }
    }

    return (
        <>

            <div className="container-fluid">
                <h3 className="text-dark mb-1">Statistique</h3>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card shadow border-start-primary py-2 my-1 px-sm-2">
                            <div className="card-body">
                                <div className="row align-items-center no-gutters">
                                    <div className="col me-2">
                                        <div className="text-uppercase text-primary fw-bold text-xs mb-1"><span>Books</span></div>
                                        <div className="text-dark fw-bold h5 mb-0"><span>{nbBook} {nbBook <= 1 ? "Livre" : "Livres"}</span></div>
                                    </div>
                                    <div className="col-auto"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20" fill="none" className="fa-2x text-gray-300">

                                        <path d="M9 4.80423C7.9428 4.28906 6.75516 4 5.5 4C4.24484 4 3.0572 4.28906 2 4.80423V14.8042C3.0572 14.2891 4.24484 14 5.5 14C7.1686 14 8.71789 14.5108 10 15.3847C11.2821 14.5108 12.8314 14 14.5 14C15.7552 14 16.9428 14.2891 18 14.8042V4.80423C16.9428 4.28906 15.7552 4 14.5 4C13.2448 4 12.0572 4.28906 11 4.80423V12C11 12.5523 10.5523 13 10 13C9.44772 13 9 12.5523 9 12V4.80423Z" fill="currentColor"></path>
                                    </svg></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow border-start-success py-2 my-1">
                            <div className="card-body">
                                <div className="row align-items-center no-gutters">
                                    <div className="col me-2">
                                        <div className="text-uppercase text-success fw-bold text-xs mb-1"><span>Utilisateur</span></div>
                                        <div className="text-dark fw-bold h5 mb-0"><span>{nbuser} Utilisateurs</span></div>
                                    </div>
                                    <div className="col-auto"><i className="fas fa-user-friends fa-2x text-gray-300"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow border-start-warning py-2 my-1 px-sm-2">
                            <div className="card-body">
                                <div className="row align-items-center no-gutters">
                                    <div className="col me-2">
                                        <div className="text-uppercase text-warning fw-bold text-xs mb-1"><span>Auteur</span></div>
                                        <div className="text-dark fw-bold h5 mb-0"><span>{nbauthor} Auteurs</span></div>
                                    </div>
                                    <div className="col-auto"><i className="fa fa-usd fa-2x text-gray-300"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow border-start-warning py-2 my-1 px-sm-2">
                            <div className="card-body">
                                <div className="row align-items-center no-gutters">
                                    <div className="col me-2">
                                        <div className="text-uppercase text-warning fw-bold text-xs mb-1"><span>Demande</span></div>
                                        <div className="text-dark fw-bold h5 mb-0"><span>{nbdemande} Demandes</span></div>
                                    </div>
                                    <div className="col-auto"><i className="fa fa-usd fa-2x text-gray-300"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <h3 className="text-dark mb-4">Liste des Livres</h3><a className="btn btn-success btn-icon-split my-2 rounded-8" data-bs-toggle="modal" data-bs-target="#createBook"><span className="text-white-50 icon"><i className="fas fa-book"></i></span><span className="text-white text">Créer Un livres</span></a>
                <div className="card shadow">
                    <div className="card-body">
                        <div className="row">

                            <div className="col-md-12">
                                <div className="text-md-end dataTables_filter" id="dataTable_filter"><label className="form-label">Nom de l'auteur ou de l'utilisateur<input type="text" className="form-control form-control-sm" aria-controls="dataTable" onChange={handler} placeholder="Search" /></label></div>
                            </div>
                        </div>
                        <div className="table-responsive table mt-2" id="dataTable-1" role="grid" aria-describedby="dataTable_info">
                            <table className="table my-0" id="dataTable">
                                <thead>
                                    <tr>
                                        <th>Auteur</th>
                                        <th>Status</th>
                                        <th>Livre</th>
                                        <th>Nb Page</th>
                                        <th>Date Publication</th>
                                        <th>telechargement</th>
                                        <th className="text-center filter-false sorter-false">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {books.length <= 0 ? "no data" : books.data.map((item: any) => (
                                        <tr key={item.id}>
                                            <td>
                                                {/* <img className="rounded-circle me-2" width="30" height="30" src="assets/img/avatars/avatar1.jpeg" /> */}
                                                {item.author}</td>
                                            <td className={item.etat === 0 ? " text-danger" : ""}> {item.etat === 1 ? "Active" : "Inactive"}</td>
                                            <td><img className="rounded-circle me-2" width="70" height="70" src={item.picture} />{item.title}</td>
                                            <td>{item.numberOfPage}</td>
                                            <td>{item.releaseDate}</td>
                                            <td>{item.id}</td>
                                            <td className="text-center align-middle" style={{ maxHeight: "60px", height: "60px" }}>
                                                <a type="button" data-bs-toggle="modal" data-bs-target="#Viewbook" className="btn btnMaterial btn-flat primary semicircle" onClick={() => (setUserInfo(item))}  ><i className="far fa-eye"></i></a>
                                                <a type="button" className="btn btnMaterial btn-flat success semicircle" data-bs-toggle="modal" data-bs-target="#editbook" onClick={() => (setUserInfo(item))} ><i className="fas fa-pen"></i></a>
                                                <a className="btn btnMaterial btn-flat accent btnNoBorders checkboxHover" role="button" style={{ marginLeft: "5px" }} data-bs-toggle="modal" data-bs-target="#delete-modal" href="#"><i className="fas fa-trash btnNoBorders" style={{ color: "#DC3545" }}></i></a>


                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td><strong>Auteur</strong></td>
                                        <td><strong>Status</strong></td>
                                        <td><strong>Livre</strong></td>
                                        <td><strong>Nb Page</strong></td>
                                        <td><strong>Date publication</strong></td>
                                        <th>telechargement</th>
                                        <th className="text-center filter-false sorter-false">Actions</th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div className="row">
                            <div className="col-md-6 align-self-center">
                                <p id="dataTable_info" className="dataTables_info" role="status" aria-live="polite">Showing 1 to {books.total < 8 ? books.total : books.per_page} of {books.total < 8 ? books.total : books.per_page}</p>
                            </div>
                            <div className="col-md-6">
                                <nav className="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
                                    <ul className="pagination">
                                        {allLinks.map((item: any) =>
                                            <>
                                                <li className={item.active ? "page-item active" : "page-item"} ><a className="page-link" onClick={() => (getBooks(item.url))} >{item.label}</a></li>
                                            </>

                                        )}
                                        {/*                                         <li className="page-item disabled"><a className="page-link" href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
                                        <li className="page-item active" style={{ backgroundColor: " #fe9329 !important", color: "#fe9329 !important" }}><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item"><a className="page-link" href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li>
 */}                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <BookAdd authors={{ authors }} category={{ category }} />

                <BookView item={{ CurentAuthorData }} authors={{ authors }} />
                <BookEdit item={{ CurentAuthorData }} category={{ category }} authors={{ authors }} />

                <footer className="bg-white sticky-footer">
                    <div className="container my-auto">
                        <div className="text-center my-auto copyright"><span>By INNOV237 2022</span></div>
                    </div>
                </footer>
            </div><a className="border rounded d-inline scroll-to-top" href="#page-top"><i className="fas fa-angle-up"></i></a>


        </>


    );
}

export default Home;
