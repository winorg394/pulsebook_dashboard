import React, { FC, useContext, useEffect, useState } from 'react';
import ApiContext from '../../context/ApiContext';
interface Props {
    // any props that come into the component
}




const Auteur = () => {

    const Api: any = useContext(ApiContext);

    const [authors, setauthor] = useState<any>([]);
    const [CurentAuthorData, setCurrentAuthoData] = useState<any>([]);
    useEffect(() => {

        getAuthors();
        //console.log(authors);


    }, [])

    const getAuthors = async () => {

        console.log("ok server 2");

        var response = await Api.getData('getAuthorlist');
        console.log("ok server 215487659878");

        console.log(response.data.data);


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

    const setUserInfo = async (data: any) => {
        setCurrentAuthoData(data);
    }
    return (
        <>
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-6">
                            <h3 className="text-dark mb-4">Liste des Auteurs<br /></h3>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 text-end" style={{ marginBottom: "30px" }}><a className="btn btn-primary btn-sm reset border-0" role="button" style={{ backgroundColor: " #fe9329 !important" }}><i className="fa fa-plus"></i>&nbsp;Ajouter un auteur</a></div>
                    </div>
                    <div className="card" id="TableSorterCard">
                        <div className="card-header py-3">
                            <div className="row table-topper align-items-center">
                                <div className="col-12 col-sm-5 col-md-6 text-start" style={{ margin: "0px", padding: "5px 15px" }}>
                                    <p className="text-primary m-0 fw-bold">Auteur</p>
                                </div>
                                <div className="col-12 col-sm-7 col-md-6 text-end" style={{ margin: "0px", padding: "5px 15px" }}>
                                    <button className="btn btn-warning btn-sm" id="zoom_in" type="button" style={{ margin: "2px" }}><i className="fa fa-search-plus"></i></button>
                                    <button className="btn btn-warning btn-sm" id="zoom_out" type="button" style={{ margin: "2px" }}><i className="fa fa-search-minus"></i></button></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="table-responsive">
                                    <table className="table table-striped table tablesorter" id="ipi-table">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th className="text-center">Nom</th>
                                                <th className="text-center">nb livre publier</th>
                                                <th className="text-center">nom libre vendu</th>
                                                <th>Solde</th>
                                                <th className="text-center filter-false sorter-false">Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-center">
                                            {authors.map((item: any) => (
                                                <tr>
                                                    <td>{item.name}</td>
                                                    <td>{item.owne}</td>
                                                    <td>{item.selle}</td>
                                                    <td>{item.balance}</td>
                                                    <td className="text-center align-middle" style={{ maxHeight: "60px", height: "60px" }}>
                                                        <a type="button" data-bs-toggle="modal" data-bs-target="#modal-1" className="btn btnMaterial btn-flat primary semicircle" onClick={() => (setUserInfo(item)
                                                        )}  ><i className="far fa-eye"></i></a>
                                                        {/*                                                         <a className="btn btnMaterial btn-flat success semicircle" role="button" href="#"><i className="fas fa-pen"></i></a>
                                                        <a className="btn btnMaterial btn-flat accent btnNoBorders checkboxHover" role="button" style={{ marginLeft: "5px" }} data-bs-toggle="modal" data-bs-target="#delete-modal" href="#"><i className="fas fa-trash btnNoBorders" style={{ color: "#DC3545" }}></i></a>
                                                  
 */}
                                                    </td>
                                                </tr>
                                            ))
                                            }


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                { /**
            *       <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-6">
                        <h3 className="text-dark mb-4">Liste des Auteurs<br/></h3>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 text-end" style={{marginBottom: "30px"}}><a className="btn btn-primary btn-sm reset border-0" role="button" style={{backgroundColor:" #fe9329 !important"}}><i className="fa fa-plus"></i>&nbsp;Ajouter un auteur</a></div>
                </div>
                <div className="card" id="TableSorterCard">
                    <div className="card-header py-3">
                        <div className="row table-topper align-items-center">
                            <div className="col-12 col-sm-5 col-md-6 text-start" style={{margin: "0px",padding: "5px 15px"}}>
                                <p className="text-primary m-0 fw-bold">Auteur</p>
                            </div>
                            <div className="col-12 col-sm-7 col-md-6 text-end" style={{margin: "0px",padding: "5px 15px"}}>
                                <button className="btn btn-warning btn-sm" id="zoom_in" type="button"  style={{margin: "2px"}}><i className="fa fa-search-plus"></i></button>
                            <button className="btn btn-warning btn-sm" id="zoom_out" type="button"  style={{margin: "2px"}}><i className="fa fa-search-minus"></i></button></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="table-responsive">
                                <table className="table table-striped table tablesorter" id="ipi-table">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th className="text-center">Nom</th>
                                            <th className="text-center">nb livre publier</th>
                                            <th className="text-center">nom libre vendu</th>
                                            <th>Solde</th>
                                            <th className="text-center filter-false sorter-false">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-center">
                                        <tr>
                                            <td>Ana</td>
                                            <td>Diseñador</td>
                                            <td>Diseño</td>
                                            <td>Cell 4</td>
                                            <td className="text-center align-middle" style={{maxHeight: "60px",height: "60px"}}><button type="button" data-bs-toggle="modal" data-bs-target="#modal-1" className="btn btnMaterial btn-flat primary semicircle"  ><i className="far fa-eye"></i></button><a className="btn btnMaterial btn-flat success semicircle" role="button" href="#"><i className="fas fa-pen"></i></a><a className="btn btnMaterial btn-flat accent btnNoBorders checkboxHover" role="button" style={{marginLeft: "5px"}} data-bs-toggle="modal" data-bs-target="#delete-modal" href="#"><i className="fas fa-trash btnNoBorders" style={{color: "#DC3545"}}></i></a></td>
                                        </tr>
                                   
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             */}
            </div>
            <div className="modal fade" role="dialog" tabIndex={-1} id="modal-1">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Detail de l'auteur</h4><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>EX.</p><div className="container">
                                <div className="main-body">



                                    <div className="row gutters-sm">
                                        <div className="col-md-4 mb-3">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="d-flex flex-column align-items-center text-center">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle"
                                                            width="150" />
                                                        <div className="mt-3">
                                                            <h4>{CurentAuthorData.name}</h4>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-md-8">
                                            <div className="card mb-3">
                                                <dl className="row">
                                                    <dt className="my-2 col-sm-5">Nom: </dt>
                                                    <dd className="my-2 col-sm-7">{CurentAuthorData.secondName}</dd>
                                                    <dt className="my-2 col-sm-5">Email: </dt>
                                                    <dd className="my-2 col-sm-7">{CurentAuthorData.email}</dd>
                                                    <dt className="my-2 col-sm-5">Numéro de téléphone</dt>
                                                    <dd className="my-2 col-sm-7">{CurentAuthorData.phoneNumber}</dd>
                                                    <dt className="my-1 col-sm-5">Nombre de livre publié</dt>
                                                    <dd className="my-1 col-sm-7">{CurentAuthorData.owne}</dd>
                                                    <dt className="my-2 col-sm-5">Nombre de Livre vendu</dt>
                                                    <dd className="my-2 col-sm-7">{CurentAuthorData.selle}</dd>
                                                    <dt className="my-1 col-sm-5">Date d'inscription</dt>
                                                    <dd className="my-1 col-sm-7">{CurentAuthorData.created_at}</dd>
                                                </dl>
                                            </div>


                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-light" type="button" data-bs-dismiss="modal">Close</button>
                            {/* <button className="btn btn-primary" type="button">Save</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Auteur;