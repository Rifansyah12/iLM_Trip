import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../../components/Paket/OpenTrip/header";
import PrivateTrip from "../../../components/Paket/OpenTrip";
const Paket = () => {
  const { id } = useParams(); // Ambil ID dari URL
  console.log("ID dari useParams di PaketHome:", id);
  return (
    <div>
      <Header id={id} />
      <PrivateTrip />
    </div>
  );
};

export default Paket;
