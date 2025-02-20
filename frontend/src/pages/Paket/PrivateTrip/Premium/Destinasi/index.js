import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../../../../components/Paket/PrivateTrip/Premium/Destinasi/header";
import Destinasi from "../../../../../components/Paket/PrivateTrip/Premium/Destinasi";
const PaketHome = () => {
  const { id_privatetrip } = useParams();
  const [destinasi, setDestinasi] = useState(null);

  useEffect(() => {
    const fetchDestinasiByIdPrivate = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/getDestinasiByIdPrivate/${id_privatetrip}`
        );
        setDestinasi(response.data || []);
      } catch (error) {
        console.error("Error fetching destinasi:", error);
        setDestinasi([]);
      }
    };

    if (id_privatetrip) {
      fetchDestinasiByIdPrivate();
    }
  }, [id_privatetrip]);
  return (
    <div>
      <Header destinasi={destinasi} />
      <Destinasi destinasi={destinasi} />
    </div>
  );
};

export default PaketHome;
