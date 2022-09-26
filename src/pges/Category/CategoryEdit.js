
import React, { FC, useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import ApiService from '../../services/ApiService';

/**
* @author
* @function CategoryEdit
**/

export const CategoryEdit = ({ item, authors }) => {
  var authors = authors.authors;
  var CurentAuthorData = item.CurentAuthorData;
  console.log(CurentAuthorData.id);
  const Api = new ApiService();

  const [isLoad, setisLoad] = useState(false);

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = async data => {
    // setisLoad(true);

    // return console.log(logo[0]);

    console.log("data.cicon.length");
    console.log(data.icon.length);

    if (data.icon.length != 0) {

      var response = await Api.uploadFile(data.icon[0]);
      if (response.data.success) {
        const credentials = {
          'wording': data.wording,
          'sub_category_id': data.sub_category_id,
          'icon': response.data.data,
        }
        var responsepost = await Api.postData('edit/' + CurentAuthorData.id, credentials);
        if (responsepost.data.data.success) {
          document.location.reload(true)
          alert("Bien envoyer with icon");
          setisLoad(false);


        } else {
          setisLoad(false);
          alert("Bien nononon");


          alert(responsepost.data.message)

        }
        return response.data.data;
      } else {
        console.log("une erreur c'est produite");

      }

    } else {
      const credentials = {
        'wording': data.wording,
        'sub_category_id': data.sub_category_id,
      }
      var responsepost = await Api.postData('edit/' + CurentAuthorData.id, credentials);
      if (responsepost.data.data.success) {
        alert("Bien envoyer without icon");
        setisLoad(false);
      } else {
        setisLoad(false);
        alert("Bien nononon");
        alert(responsepost.data.message)
      }

    }

    /*    if (data.icon.length != 0) {
         alert('ok icon alert')
   
       } else {
   
         const credentials = {
           'wording': data.wording,
           'sub_category_id': data.sub_category_id,
         }
         //    console.log(credentials);
   
         var responsepost = await Api.updateData('category/update/7', credentials);
         if (responsepost.data.data.success) {
   
           alert("Bien envoyer without icon");
           setisLoad(false);
   
   
         } else {
           setisLoad(false);
           alert("Bien nononon");
   
   
           alert(response.data.message)
   
         }
   
       } */






  };


  return (
    <div className="modal fade" role="dialog" tabIndex={-1} id="EditCat">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Edition de la catégorie</h4><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="container">
            <div className="main-body">
              <form className="mx-5" method="post" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="visually-hidden">Login Form</h2>
                <div className="mb-3">
                  <input className="form-control" type="text" placeholder="wording"  {...register("wording", { required: true })} defaultValue={CurentAuthorData.wording} /></div>
                {errors.wording && <span style={{ color: "red" }}>This field is required</span>}
                <div className="mb-3">
                  <label className="form-label">Sous Categorie


                    <select className="d-inline-block form-select form-select-xl"  {...register("sub_category_id")} style={{ left: "12px", marginLeft: "12px" }}>

                      {authors.map(item => (
                        <option value={item.id} selected={CurentAuthorData.sub_category_id == item.id ? "true" : "false"}  >{item.wording}</option>
                      ))
                      }
                    </select>&nbsp;</label>

                </div>
                <div className="mb-3">
                  <input className="form-control" type="file"  {...register("icon")} placeholder="icon" /></div>
                {errors.wording && <span style={{ color: "red" }}>Icon is required</span>}
                <div className="mb-3">
                  {!isLoad && <input type="submit" className="btn btn-primary d-block w-100" value="Modifier" />}
                  {isLoad && <input type="submit" className="btn btn-primary d-block w-100" value="En cours..." />}
                </div>
              </form>
              <section className="login-clean"></section>

            </div>
          </div>
          <div className="modal-footer">
            {/*     <button className="btn btn-light" type="button" data-bs-dismiss="modal">Close</button> */}
            {/* <button className="btn btn-primary" type="button">Save</button> */}
          </div>
        </div>
      </div>

    </div>
  )

}