"use client"

export default function AddEmployee() {

  return (
    <div className="modal fade" id="addEmployee" aria-labelledby="addEmployeeLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content fw-light">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="addEmployeeLabel">Add New Employee</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label className="col-form-label">First Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                />
              </div>
              <div className="mb-3">
                <label className="col-form-label">Last Name</label>
                <input 
                  type="text" 
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="col-form-label">Email</label>
                <input 
                  type="text" 
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="col-form-label">Phone Number</label>
                <input 
                  type="number" 
                  className="form-control"
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-dark fw-light">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
