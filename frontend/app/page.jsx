"use client"
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/Nav";
import ListEmployee from "@/components/listEmployee";
import DeleteModel from "@/components/deleteModel";
import ViewModel from "@/components/viewModel";
import { useState } from "react";

export default function Home() {
  const employees = [
    {
      id: 1,
      name: 'Sayeful Islam',
      email: 'sayeful@gmail.com',
      phone: '0987654321',
      status: false
    },
    {
      id: 2,
      name: 'Tanvir Islam',
      email: 'tanvir@gmail.com',
      phone: '1965654321',
      status: false
    },
    {
      id: 3,
      name: 'Mir Islam',
      email: 'mir@gmail.com',
      phone: '9987654321',
      status: false
    },
    {
      id: 4,
      name: 'Tuhin Hossain',
      email: 'tuhin@gmail.com',
      phone: '9987654321',
      status: false
    }
  ];
  const [view, setView] = useState({});
  const [status, setStatus] = useState(false);

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
      <Navbar />
      <div className="container">
        <h1 className="text-center mt-4">All Employee List</h1>

        <div className="row mt-4 justify-content-md-center">
          {
            employees.map((employee) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={employee.id}>
                <ListEmployee 
                  employee={employee} 
                  setView={setView} 
                  status={status}
                  handelStatus={handelStatus}
                />
              </div>
            )})
          }
        </div>
      </div>
      <ViewModel view={view} />
      <DeleteModel />
      <Footer />
    </>
  );
};
