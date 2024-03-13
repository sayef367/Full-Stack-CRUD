"use client"

export default function ViewModel({updateHandel, update, setUpdate}) {
  return (
    <div className="modal fade" id="exampleModalView" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content fw-light">
          <div className="modal-header">
            <h5 className="modal-title">Employee Details</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form onSubmit={updateHandel}>
              <div className="mb-3">
                <label className="col-form-label">Full Name</label>
                <input 
                  type="text" 
                  className="form-control fw-light" 
                  value={update.name}
                  onChange={(e) => setUpdate({...update, name: e.target.value})}
                />
              </div>
              <div className="mb-3">
                <label className="col-form-label">Email</label>
                <input 
                  type="text" 
                  className="form-control fw-light"
                  value={update.email}
                  disabled
                />
              </div>
              <div className="mb-3">
                <label className="col-form-label">Phone Number</label>
                <input 
                  type="number" 
                  className="form-control fw-light"
                  value={update.phone}
                  onChange={(e) => setUpdate({...update, phone: e.target.value})}
                />
              </div>
              <button 
                type="submit" 
                className="btn btn-dark fw-light"
                ><i className="bi bi-pencil-square"/> Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
