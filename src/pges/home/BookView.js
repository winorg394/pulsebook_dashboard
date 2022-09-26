import React from 'react'

/**
* @author
* @function BookView
**/

export const BookView = ({ item,authors }) => {
    var authors = item.authors;
    var CurentAuthorData = item.CurentAuthorData;
  return(
    <div className="modal fade" role="dialog" tabIndex={-1} id="Viewbook">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Détail du livre</h4><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="container">
          <div className="main-body">
            <div className="row gutters-sm">
              <div className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                      <img src={CurentAuthorData.picture} alt="Admin" className="rounded-circle"
                        width="150" />
                      <div className="mt-3">
                        <h4>{CurentAuthorData.name} {CurentAuthorData.secondName}</h4>
                        

                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-md-8">
                <div className="card mb-3" style={{ padding: "10px" }}>
                  <dl className="row">
                    <dt className="my-2 col-sm-5">Auteur: </dt>
                    <dd className="my-2 col-sm-7">{CurentAuthorData.author}</dd>
                    <dt className="my-2 col-sm-5">Status</dt>
                    <dd className={ item.etat === 0 ? " text-danger my-2 col-sm-7" : "my-2 col-sm-7"}> {CurentAuthorData.etat === 1 ? "Active" : "Inactive"}</dd>
                    
                    <dt className="my-2 col-sm-5">Titre: </dt>
                    <dd className="my-2 col-sm-7">{CurentAuthorData.title}</dd>
                               
                    <dt className="my-2 col-sm-5">Category: </dt>
                    <dd className="my-2 col-sm-7">{CurentAuthorData.wording}</dd>

                    <dt className="my-2 col-sm-5">Date publication: </dt>
                    <dd className="my-2 col-sm-7">{CurentAuthorData.releaseDate}</dd>

                    <dt className="my-2 col-sm-5">Nombre page: </dt>
                    <dd className="my-2 col-sm-7">{CurentAuthorData.numberOfPage}</dd>
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