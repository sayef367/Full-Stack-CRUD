import Link from "next/link";
import AddEmployee from "../addEmployee";

export default function Navbar({submitHandler, submit, setSubmit}) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link href={'/'} className="navbar-brand pt-0 pb-0 fw-bold fs-3">
            Asif inc.
          </Link>
          <div>
            <ul className="navbar-nav ms-auto fw-light">
              <li className="nav-item ms-2 me-2">
                <button type="button" 
                  className="btn btn-dark btn-sm rounded-5 fw-light" 
                  data-bs-toggle="modal" 
                  data-bs-target="#addEmployee">
                  <i className="bi bi-person-plus"/> Add Employee
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <AddEmployee 
        submitHandler={submitHandler}
        submit={submit}
        setSubmit={setSubmit}
      />
    </div>
  );
};