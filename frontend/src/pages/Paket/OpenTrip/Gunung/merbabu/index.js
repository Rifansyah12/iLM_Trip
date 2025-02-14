import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../../../../components/Paket/OpenTrip/Gunung/merbabu/header";
import Merbabu from "../../../../../components/Paket/OpenTrip/Gunung/merbabu";
const OpenTrip = () => {
  const { id } = useParams();
  const [destinasi, setDestinasi] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchDestinasi = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/getDestinasiById/${id}`);
        setDestinasi(response.data);
      } catch (err) {
        setError("Destinasi tidak ditemukan");
      } finally {
        setLoading(false);
      }
    };

    fetchDestinasi();
  }, [id]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Header destinasi={destinasi} />
      <Merbabu destinasi={destinasi} />
    </div>
  );
};

export default OpenTrip;
