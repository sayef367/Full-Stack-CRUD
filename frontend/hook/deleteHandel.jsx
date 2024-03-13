"use client"
import { useState } from "react";
import axios from "axios";

export default function DeleteHandel() {
  const [deleteId, setDeleteId] = useState(null);

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
    window.location.reload();
  };

  return [deleteHandel, deleteId, setDeleteId];
};
