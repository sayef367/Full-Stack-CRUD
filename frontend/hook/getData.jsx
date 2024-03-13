"use client"
import axios from "axios";
import { useEffect, useState } from "react";

export default function GetData(refresh) {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      await axios.get('http://localhost:4000')
      .then((res) => {
        setEmployees(res.data.result);
      })
      .catch((error) => {
        if(error.response.data.error === undefined){
          alert('Internal error!');
        } else {
          alert(error.response.data.error);
        };
      });
    };
    fetchAPI();
  },[refresh]);

  return [employees];
};
