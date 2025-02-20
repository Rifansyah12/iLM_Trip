import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../../../components/Paket/Another/explore/header";
import Main from "../../../../components/Paket/Another/explore/index";
const Explore = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/getAnothertripById/${id}`
        );
        setTrip(response.data);
      } catch (error) {
        console.error("Error fetching trip data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrip();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!trip) return <p>Data tidak ditemukan.</p>;

  return (
    <div>
      <Header trip={trip} />
      <Main trip={trip} />
    </div>
  );
};

export default Explore;
