
export default function DeleteModel({deleteId, deleteHandel}) {

  return (
    <div className="modal fade" id="exampleModalDelete" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="row pt-3 pb-1">
            <div className="col-8">
              <p className="ps-3">Delete this Employee!</p>
            </div>
            <div className="col-4 text-end pe-4">
              <button type="button" className="btn btn-outline-dark btn-sm me-2" data-bs-dismiss="modal"
                ><i className="bi bi-x-lg" />
              </button>
              <button type="button" 
                className="btn btn-outline-dark btn-sm"
                onClick={() => deleteHandel(deleteId)}
                ><i className="bi bi-trash" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
