import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import ApiService from '../../services/ApiService';

/**
* @author
* @function BookEdit
**/

export const BookEdit = ({ category, authors, item }) => {
    var authors = authors.authors;
    var CurentAuthorData = item.CurentAuthorData;
    var category = category.category;
    const Api = new ApiService();

    const [Msg, seterrorMsg] = useState();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [isLoad, setisLoad] = useState(false);

    const onSubmit = async data => {

        console.log("data.cicon.length");
        console.log(data.pdf.length == 0 ? "pdf not existe" : data.pdf.length);
        console.log(data.picture.length == 0 ? "picture not existe" : data.picture.length);
        //   console.log(data.file.length);


        var responsefile
        var responsepdf
        //  var responsefile = await Api.uploadFile(data.picture[0]);
        //  var responsepdf = await Api.uploadPdf(data.pdf[0]);
        //  response.data.success
        if (data.pdf.length != 0) {
            responsepdf = await Api.uploadPdf(data.pdf[0]);
        }

        if (data.picture.length != 0) {
            responsefile = await Api.uploadFile(data.picture[0]);
        }

        const credentials = {
            //  'wording': data.wording,
            // 'sub_category_id': data.sub_category_id,
            //  'icon': response.data.data,
            'publishingHouse': data.publishingHouse,
            'user_id': data.user_id == null ? CurentAuthorData.user_id : data.user_id,
            'etat': data.etat == null ? CurentAuthorData.etat : data.etat,
            'numberOfPage': data.numberOfPage,
            'categorie_id': data.categorie_id == null ? CurentAuthorData.categorie_id : data.categorie_id,
            'author': data.author,
            'title': data.title,
            'description': data.description,
            'picture': data.picture.length == 0 ? CurentAuthorData.picture : responsefile.data.success ? responsefile.data.data : CurentAuthorData.picture,
            'price': data.price,
            'kind': data.kind,
            'bookpdf': data.pdf.length == 0 ? CurentAuthorData.bookpdf : responsepdf.data.success ? responsepdf.data.data : CurentAuthorData.bookpdf,
            'readingState': data.readingState,
            'releaseDate': data.releaseDate,
        }
        var responsepost = await Api.postData('updateBooks/' + CurentAuthorData.id, credentials);
        if (responsepost.data.success) {
            document.location.reload(true)
            alert("Bien envoyer with icon");
            setisLoad(false);
        } else {
            setisLoad(false);
            alert("Bien nononon");
            alert(responsepost.data.message)
        }
        //return response.data.data;


    };

    return (
        <div>    <div className="modal fade" role="dialog" tabIndex={-1} id="editbook">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Creer un livre</h4><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form className="mx-5" method="post" onSubmit={handleSubmit(onSubmit)}>
                            <h2 className="visually-hidden">Formulaire de creation d'un livre</h2>
                            <div className="mb-3">
                                <label className="form-label">Utilisateur


                                    <select className="d-inline-block form-select form-select-xl"  {...register("user_id")} style={{ left: "12px", marginLeft: "12px" }}>

                                        {authors.map(item => (
                                            <option value={item.id}   >{item.name}</option>
                                        ))
                                        }
                                    </select></label>

                            </div> <div className="mb-3">
                                <label className="form-label">Etat du livre


                                    <select className="d-inline-block form-select form-select-xl"  {...register("etat")} style={{ left: "12px", marginLeft: "12px" }}>

                                        <option value="0"   >Active</option>
                                        <option value="1"   >Innactive</option>
                                        <option value="2"   >Suprimer</option>

                                    </select></label>

                            </div>
                            <div className="mb-3">
                                <label className="form-label">Categorie


                                    <select className="d-inline-block form-select form-select-xl"  {...register("categorie_id")} style={{ left: "12px", marginLeft: "12px" }}>

                                        {category.map(item => (
                                            <option value={item.id}   >{item.wording}</option>
                                        ))
                                        }
                                    </select></label>

                            </div>
                            <div className="mb-3">
                                <label className="form-label">Auteur</label>
                                <input className="form-control" defaultValue={CurentAuthorData.author} type="text" placeholder="Auteur du livre"  {...register("author", { required: true })} />
                            </div>
                            {errors.author && <span style={{ color: "red" }}>Le nom de l'auteur est obligatoire</span>}
                            <div className="mb-3">
                                <label className="form-label">Titre du livre</label>
                                <input className="form-control" defaultValue={CurentAuthorData.title} type="text" placeholder="titre du livre"  {...register("title", { required: true })} /></div>
                            {errors.title && <span style={{ color: "red" }}>Le titre du livre est obligatoire</span>}
                            <div className="mb-3">
                                <label className="form-label">Prix du livre</label>

                                <input className="form-control" defaultValue={CurentAuthorData.price} type="number" placeholder="price"  {...register("price", { required: true })} /></div>
                            {errors.price && <span style={{ color: "red" }}>Le pris du livre est obligatoire</span>}
                            <div className="mb-3">
                                <label className="form-label">Maison de publication</label>

                                <input className="form-control" defaultValue={CurentAuthorData.publishingHouse} type="text" placeholder="publishingHouse"  {...register("publishingHouse", { required: true })} /></div>
                            {errors.publishingHouse && <span style={{ color: "red" }}>La maison de publication est obligatoire</span>}

                            <div className="mb-3">
                                <label className="form-label">Nombre de page</label>

                                <input className="form-control" defaultValue={CurentAuthorData.numberOfPage} type="text" placeholder="nombre de page"  {...register("numberOfPage", { required: true })} /></div>
                            {errors.numberOfPage && <span style={{ color: "red" }}>Le nombre de page est obligatoire</span>}
                            <div className="mb-3">
                            <label className="form-label">date de sortie</label>

                                <input className="form-control" defaultValue={CurentAuthorData.releaseDate} type="text" placeholder="releaseDate"  {...register("releaseDate", { required: true })} /></div>
                            {errors.releaseDate && <span style={{ color: "red" }}>date de sortie obligatoire</span>}
                            <div className="mb-3">
                            <label className="form-label">King</label>

                                <input className="form-control" defaultValue={CurentAuthorData.kind} type="text" placeholder="king"  {...register("kind", { required: true })} /></div>
                            {errors.kind && <span style={{ color: "red" }}>This field is required</span>}

                            <div className="mb-3">
                            <label className="form-label">Etat de lecture</label>

                                <input className="form-control" defaultValue={CurentAuthorData.wording} type="text" placeholder="Etat de lecture"  {...register("readingState", { required: true })} /></div>
                            {errors.wording && <span style={{ color: "red" }}>Etat de lecture est obligatoire</span>}

                            <div className="mb-3">
                            <label className="form-label">Description</label>

                                <textarea className="form-control" defaultValue={CurentAuthorData.description} type="text" placeholder="description"  {...register("description", { required: true })} /></div>
                            {errors.description && <span style={{ color: "red" }}>description obligatoire</span>}

                            <div className="mb-3">
                                <input className="form-control" type="file"  {...register("picture")} placeholder="picture" /></div>
                            {errors.picture && <span style={{ color: "red" }}>la premiere de couverture est obligatoire</span>}
                            <div className="mb-3">
                                <input className="form-control" type="file"  {...register("pdf")} placeholder="pdf du livre" /></div>
                            {errors.pdf && <span style={{ color: "red" }}>Le lien du pdf est obligatoire</span>}
                            <div className="mb-3">
                                {!isLoad && <input type="submit" className="btn btn-primary d-block w-100" value="M'inscrire" />}
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
        </div></div>
    )

}