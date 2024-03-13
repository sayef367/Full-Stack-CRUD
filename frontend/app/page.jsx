"use client"
import Navbar from "@/components/layout/Nav";
import Footer from "@/components/layout/footer";
import ListEmployee from "@/components/listEmployee";
import DeleteModel from "@/components/deleteModel";
import ViewModel from "@/components/viewModel";
import GetDataHandeler from "@/hook/getData";
import SubmitHandeler from "@/hook/submitHandel";
import DeleteHandeler from "@/hook/deleteHandel";
import StatusHandeler from "@/hook/statusHandel";
import UpdateHandeler from "@/hook/updateHandel";
import { useState } from "react";

export default function Home() {
  const [refresh, setRefresh] = useState(0);

  // All Custom hooks
  const [employees] = GetDataHandeler(refresh);
  const [submitHandler, submit, setSubmit] = SubmitHandeler();
  const [deleteHandel, deleteId, setDeleteId] = DeleteHandeler();
  const [handelStatus] = StatusHandeler(refresh, setRefresh);
  const [updateHandel, update, setUpdate] = UpdateHandeler();

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
