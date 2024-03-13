"use client"
import axios from "axios";

export default function StatusHandel(refresh, setRefresh) {

  const handelStatus = async (condition, statusId) => {
    if (condition === true) {
      const newStatus = {method: 'status', id: statusId, status: false};
      await axios.put('http://localhost:4000', newStatus);
    } else {
      const newStatus = {method: 'status', id: statusId, status: true};
      await axios.put('http://localhost:4000', newStatus);
    };
    setRefresh(refresh + 1);
  };

  return [handelStatus];
};
