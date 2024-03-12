"use client"

export default function ViewEmployee({employee, setView, status, handelStatus}) {
  return (
    <div className="card shadow">
      <div className="card-body">
        <h6 className="card-title">{employee.fname + ' ' + employee.lname}</h6>
        <hr />
        <button type="button" 
          className="btn btn-outline-dark btn-sm me-1" 
          data-bs-toggle="modal" data-bs-target="#exampleModalView" 
          onClick={() => setView(employee)}
          >Details
        </button>
        <button type="button" 
          className="btn btn-outline-dark btn-sm me-1"
          onClick={() => handelStatus(employee.status)}
          >{status === true ? 'Block' : 'Unblock'}
        </button>
        <button type="button" 
          className="btn btn-outline-dark btn-sm"
          data-bs-toggle="modal" data-bs-target="#exampleModalDelete"
          >Delete
        </button>
      </div>
    </div>
  );
};
