"use client"
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/Nav";
import ListEmployee from "@/components/listEmployee";
import DeleteModel from "@/components/deleteModel";
import ViewModel from "@/components/viewModel";
import { useState } from "react";
import GetData from "@/hook/getData";
import axios from "axios";

export default function Home() {
  // const [view, setView] = useState({});
  const [submit, setSubmit] = useState({fname: '',lname: '',email: '',phone: ''});
  const [deleteId, setDeleteId] = useState(null);
  const [update, setUpdate] = useState({name: '', phone: ''});
  // Custom hooks
  const [employees] = GetData();

  // submit handelar
  const submitHandler = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:4000', {
      name: submit.fname + ' ' + submit.lname,
      email: submit.email,
      phone: submit.phone,
      status: true
    }).then((res) => {
      alert(res.data.message);
    });
    setSubmit({fname: '',lname: '',email: '',phone: ''});
  };

  // delete handelar
  const deleteHandel = async (id) => {
    await axios.delete(`http://localhost:4000/${id}`)
    .then((res) => {
      alert(res.data.message);
    })
    .catch((error) => {
      if(error.response.data.error === undefined){
        alert('Internal error!');
      } else {
        alert(error.response.data.error);
      };
    });
  };

  // status update
  const handelStatus = async (condition, statusId) => {
    if (condition === true) {
      const newStatus = {method: 'status', id: statusId, status: false};
      await axios.put('http://localhost:4000', newStatus)
      .then((res) => {
        alert(res.data.message);
      });
    } else {
      const newStatus = {method: 'status', id: statusId, status: true};
      await axios.put('http://localhost:4000', newStatus)
      .then((res) => {
        alert(res.data.message);
      });
    };
  };

  // update employee data
  const updateHandel = async (e) => {
    e.preventDefault();
    const updateData = {
      method: 'update', 
      id: update._id, 
      name: update.name, 
      phone: update.phone
    };
    await axios.put('http://localhost:4000', updateData)
    .then((res) => {
      alert(res.data.message);
    });
    console.log(update);
  };

  return (
    <>
      {/* Top navbar */}
      <Navbar 
        submitHandler={submitHandler}
        submit={submit}
        setSubmit={setSubmit}
      />
      {/* Main section */}
      <main className="container">
        <h1 className="text-center mt-4">
          {employees.length === 0 ? 'Empty Employee Data' : 'All Employee List'}
        </h1>
        {/* all employees list */}
        <section className="row mt-4 justify-content-md-center">
          {
            employees.map((employee, id) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={id}>
                <ListEmployee 
                  employee={employee} 
                  setUpdate={setUpdate}
                  handelStatus={handelStatus}
                  setDeleteId={setDeleteId}
                />
              </div>
            )})
          }
        </section>
      </main>
      {/* Click data view and edit model */}
      <ViewModel 
        updateHandel={updateHandel}
        update={update}
        setUpdate={setUpdate}
      />
      {/* Click delete data model */}
      <DeleteModel 
        deleteId={deleteId}
        deleteHandel={deleteHandel}
      />
      {/* Bottom footer bar */}
      <Footer />
    </>
  );
};
