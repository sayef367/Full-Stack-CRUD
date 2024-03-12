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
  const [view, setView] = useState({});
  const [status, setStatus] = useState(false);
  const [submit, setSubmit] = useState({fname: '',lname: '',email: '',phone: ''});
  // Custom hooks
  const [employees] = GetData();

  // submit handelar
  const submitHandler = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:4000', {
      ...submit,
      status: true
    })
    .then((res) => {
      alert(res.data.message);
    });
    setSubmit({fname: '',lname: '',email: '',phone: ''});
  };

  const handelStatus = (condition) => {
    if (condition === true) {
      setStatus(false);
    } else {
      setStatus(true);
    };
    console.log(condition)
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
        <h1 className="text-center mt-4">All Employee List</h1>
        {/* all employees list */}
        <section className="row mt-4 justify-content-md-center">
          {
            employees.map((employee, id) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={id}>
                <ListEmployee 
                  employee={employee} 
                  setView={setView} 
                  status={status}
                  handelStatus={handelStatus}
                />
              </div>
            )})
          }
        </section>
      </main>
      {/* Click data view and edit model */}
      <ViewModel employee={view} />
      {/* Click delete data model */}
      <DeleteModel />
      {/* Bottom footer bar */}
      <Footer />
    </>
  );
};
