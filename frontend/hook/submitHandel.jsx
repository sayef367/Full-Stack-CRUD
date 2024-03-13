"use client"
import axios from "axios";
import { useState } from "react";

export default function SubmitHandel() {
  const [submit, setSubmit] = useState({fname: '',lname: '',email: '',phone: ''});

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
    window.location.reload();
  };

  return [submitHandler, submit, setSubmit];
};
