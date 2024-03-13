"use client"
import { useState } from "react";
import axios from "axios";

export default function UpdateHandel() {
  const [update, setUpdate] = useState({name: '', phone: ''});

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
    window.location.reload();
  };

  return [updateHandel, update, setUpdate];
};
