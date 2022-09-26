import React from 'react'

/**
* @author
* @function CategoryView
**/

export const CategoryView = ({ item }) => {
  var CurentAuthorData = item.CurentAuthorData;
  return (
    <div className="modal fade" role="dialog" tabIndex={-1} id="ViewCat">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Détail de la categorie</h4><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="container">
            <div className="main-body">
              <div className="row gutters-sm">
                <div className="col-md-4 mb-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex flex-column align-items-center text-center">
                        <img src={CurentAuthorData.icon} alt="Admin" className="rounded-circle"
                          width="150" />
                        <div className="mt-3">
                          <h4>{CurentAuthorData.wording}</h4>

                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="col-md-8">
                  <div className="card mb-3" style={{ padding: "10px" }}>
                    <dl className="row">
                      <dt className="my-2 col-sm-5">Label: </dt>
                      <dd className="my-2 col-sm-7">{CurentAuthorData.wording}</dd>
                      <dt className="my-2 col-sm-5">Sous Categorie</dt>
                      <dd className="my-2 col-sm-7">{CurentAuthorData.sub_category_id}</dd>
                    </dl>
                  </div>


                </div>
              </div>

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