import React, { FC, useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import ApiContext from '../../context/ApiContext';
import ApiService from '../../services/ApiService';
import { CategoryEdit } from './CategoryEdit';
import { CategoryView } from './CategoryView';
interface Props {
    // any props that come into the component
}




const Category: React.FC = () => {
    const Api = new ApiService();
    const d = new Date();

    const [authors, setauthor] = useState<any>([]);
    const [CurentAuthorData, setCurrentAuthoData] = useState<any>([]);
    const [wording, setwording] = useState<any>();
    const [category, setcategory] = useState<any>();

    const [logo, setLogo] = useState<any>();

    const [isLoad, setisLoad] = useState(false);
    const [Msg, seterrorMsg] = useState();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    // console.log(watch("wording"));

    useEffect(() => {

        getAuthors();
        console.log("athor et un grand");


    }, [])


    const handlewording = (e: any) => {
        setwording(e.target.value)
        console.log(wording);

    }

    const handlecat = (e: any) => {
        setcategory(e.target.value)
        console.log(category);

    }
    // const onSubmit = (data: any) => console.log(data);

    const onSubmit = async (data: any) => {
        setisLoad(true);
        // return console.log(logo[0]);

       //  console.log(data);



        var response = await Api.uploadFile(data.icon[0]);



        if (response.data.success) {
            const credentials = {
                'wording': data.wording,
                'sub_category_id': data.sub_category_id===null?'':data.sub_category_id,
                'icon': response.data.data,
            }
    

            var responsepost = await Api.postData('category/add', credentials);
                    console.log("data from server");
            console.log(responsepost.data);
            if (responsepost.data.data.success) {

                alert("Bien envoyer");
                setisLoad(false);
                getAuthors();

            } else {
                setisLoad(false);
                alert("Bien nononon");
                getAuthors();

                alert(response.data.message)

            }


        } else {
            seterrorMsg(response.data)
            setisLoad(false);

        }

        alert("Votre demande à été envoyée avec succès");


    };
    const onFileChangeLogo = (e: any) => {
        setLogo(e.target.files)
        console.log(e.target.files);

    }

    const getAuthors = async () => {

        console.log("server response");

        var response = await Api.getData('category/list');
        console.log("server response franky steve");

        console.log(response.data);


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
                        <div className="col-12 col-sm-6 col-md-6 text-end" style={{ marginBottom: "30px" }}><a className="btn btn-primary btn-sm reset border-0" style={{ backgroundColor: " #fe9329 !important" }} data-bs-toggle="modal" data-bs-target="#createCat"><i className="fa fa-plus"></i>&nbsp;Ajouter une category</a></div>
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
                                                <th className="text-center">id</th>
                                                <th className="text-center">Wording</th>
                                                <th className="text-center">icon</th>
                                                <th className="text-center">sub category</th>

                                                <th className="text-center filter-false sorter-false">Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-center">
                                            {authors.map((item: any) => (
                                                <tr>
                                                    <td>{item.id}</td>
                                                    <td>{item.wording}</td>
                                                    <td><img className="rounded-circle me-2" width="80" height="80" src={item.icon} /> </td>
                                                    <td>{item.sub_category_id}</td>

                                                    <td className="text-center align-middle" style={{ maxHeight: "60px", height: "60px" }}>
                                                        <a type="button" data-bs-toggle="modal" data-bs-target="#ViewCat" className="btn btnMaterial btn-flat primary semicircle" onClick={() => (setUserInfo(item))}  ><i className="far fa-eye"></i></a>
                                                        <a className="btn btnMaterial btn-flat success semicircle" data-bs-toggle="modal" data-bs-target="#EditCat" role="button"  onClick={() => (setUserInfo(item))}  href="#"><i className="fas fa-pen"></i></a>
                                                        <a className="btn btnMaterial btn-flat accent btnNoBorders checkboxHover" role="button" style={{ marginLeft: "5px" }} data-bs-toggle="modal" data-bs-target="#delete-modal" href="#"><i className="fas fa-trash btnNoBorders" style={{ color: "#DC3545" }}></i></a>


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
            <div className="modal fade" role="dialog" tabIndex={-1} id="createCat">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Detail de l'utilisqteur</h4><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="mx-5" method="post" onSubmit={handleSubmit(onSubmit)}>
                                <h2 className="visually-hidden">Login Form</h2>
                                <div className="mb-3">
                                    <input className="form-control" type="text" placeholder="wording"  {...register("wording", { required: true })} /></div>
                                {errors.wording && <span style={{ color: "red" }}>This field is required</span>}
                                <div className="mb-3">
                                    <label className="form-label">Sous Categorie


                                        <select className="d-inline-block form-select form-select-xl"  {...register("sub_category_id")} style={{ left: "12px", marginLeft: "12px" }}>
                                        <option value=""></option>
                                            {authors.map((item: any) => (
                                                <option value={item.id}>{item.wording}</option>
                                            ))
                                            }


                                        </select>&nbsp;</label>

                                </div>
                                <div className="mb-3">
                                    <input className="form-control" type="file"  {...register("icon")} placeholder="icon" /></div>
                                {errors.wording && <span style={{ color: "red" }}>Icon is required</span>}
                                <div className="mb-3">
                                    {!isLoad && <input type="submit" className="btn btn-primary d-block w-100" value="Ajouter" />}
                                    {isLoad && <input type="submit" className="btn btn-primary d-block w-100" value="En cours..." />}
                                </div>
                            </form>
                            <section className="login-clean"></section>
                        </div>
                        <div className="modal-footer">
                            {/*     <button className="btn btn-light" type="button" data-bs-dismiss="modal">Close</button> */}
                            {/* <button className="btn btn-primary" type="button">Save</button> */}
                        </div>
                    </div>
                </div>
            </div>
              <CategoryView item={{CurentAuthorData}} />
              <CategoryEdit item={{CurentAuthorData}} authors={{authors}} />
        </>
    )
}

export default Category;