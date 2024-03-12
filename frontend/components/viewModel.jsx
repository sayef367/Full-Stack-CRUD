export default function ViewModel({view}) {
  return (
    <div className="modal fade" id="exampleModalView" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content fw-light">
          <div className="modal-header">
            <h5 className="modal-title">Employee Details</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label className="col-form-label">Full Name</label>
                <input 
                  type="text" 
                  className="form-control fw-light" 
                  value={view.name}
                />
              </div>
              <div className="mb-3">
                <label className="col-form-label">Email</label>
                <input 
                  type="text" 
                  className="form-control fw-light"
                  value={view.email}
                  disabled
                />
              </div>
              <div className="mb-3">
                <label className="col-form-label">Phone Number</label>
                <input 
                  type="number" 
                  className="form-control fw-light"
                  value={view.phone}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
