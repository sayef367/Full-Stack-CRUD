"use client"

export default function ViewEmployee({employee, setUpdate, handelStatus, setDeleteId}) {
  return (
    <div className="card shadow">
      <div className="card-body">
        <h6 className="card-title">{employee.name}</h6>
        <hr />
        <button type="button" 
          className="btn btn-outline-dark btn-sm me-1" 
          data-bs-toggle="modal" data-bs-target="#exampleModalView" 
          onClick={() => setUpdate(employee)}
          >Details
        </button>
        <button type="button" 
          className="btn btn-outline-dark btn-sm me-1"
          onClick={() => handelStatus(employee.status, employee._id)}
          >{employee.status === true ? 'Block' : 'Unblock'}
        </button>
        <button type="button" 
          className="btn btn-outline-dark btn-sm"
          data-bs-toggle="modal" data-bs-target="#exampleModalDelete"
          onClick={() => setDeleteId(employee._id)}
          >Delete
        </button>
      </div>
    </div>
  );
};
