"use client"

export default function AddEmployee({submitHandler, submit, setSubmit}) {
  return (
    <div className="modal fade" id="addEmployee" aria-labelledby="addEmployeeLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content fw-light">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="addEmployeeLabel">Add New Employee</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form onSubmit={submitHandler}>
              <div className="mb-3">
                <label className="col-form-label">First Name</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={submit.fname}
                  onChange={(e) => setSubmit({...submit, fname: e.target.value})}
                />
              </div>
              <div className="mb-3">
                <label className="col-form-label">Last Name</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={submit.lname}
                  onChange={(e) => setSubmit({...submit, lname: e.target.value})}
                />
              </div>
              <div className="mb-3">
                <label className="col-form-label">Email</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={submit.email}
                  onChange={(e) => setSubmit({...submit, email: e.target.value})}
                />
              </div>
              <div className="mb-3">
                <label className="col-form-label">Phone Number</label>
                <input 
                  type="number" 
                  className="form-control"
                  value={submit.phone}
                  onChange={(e) => setSubmit({...submit, phone: e.target.value})}
                />
              </div>
              <button 
                type="submit" 
                className="btn btn-dark btn-sm fw-light"
                ><i className="bi bi-save"/> Submit
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
};
