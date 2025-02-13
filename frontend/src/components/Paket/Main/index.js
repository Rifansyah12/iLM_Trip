import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import PrivateTripImage from "../../../assets/konten/konten.png";
import OpenTripImage from "../../../assets/konten/konten.png";
import FamilyTripImage from "../../../assets/konten/konten.png";
import GatheringImage from "../../../assets/konten/konten.png";

const Paket = () => {
  const [mountainTrips, setMountainTrips] = useState([]);

  useEffect(() => {
    const fetchMountainTrips = async () => {
      try {
        const response = await axios.get("http://localhost:5000/getMountaintrip"); // Sesuaikan endpoint API
        setMountainTrips(response.data);
      } catch (error) {
        console.error("Gagal mengambil data MountainTrip:", error);
      }
    };

    fetchMountainTrips();
  }, []);
  return (
    <section
    style={{
      backgroundColor: "#222222",
      padding: "50px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    {mountainTrips.map((trip) => {
      const layananSlug = trip.nama_layanan.toLowerCase();
      const linkTo = layananSlug === "private trip" ? "/Paket/PrivateTrip" : `/Paket/OpenTrip/${trip.id}`;
  
      return (
        <div
          key={trip.id}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "300px",
            margin: "30px auto",
            maxWidth: "90%",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              flex: "1 1 50%",
              textAlign: "left",
              maxWidth: "500px",
            }}
          >
            <h3
              style={{
                color: "#fff",
                fontSize: "50px",
                marginBottom: "10px",
              }}
            >
              {trip.nama_layanan}
            </h3>
            <p style={{ color: "#fff", fontSize: "20px" }}>{trip.deskripsi_layanan}</p>
            <Link
              to={linkTo}
              style={{
                display: "inline-block",
                marginTop: "15px",
                padding: "10px 50px",
                fontSize: "25px",
                backgroundColor: "#FA8806",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "5px",
              }}
            >
              Jelajahi
            </Link>
          </div>
          <img
            src={`http://localhost:5000/images/mountaintrip/${trip.foto}`}
            alt={trip.nama_layanan}
            style={{
              flex: "1 1 40%",
              maxWidth: "300px",
              height: "auto",
              borderRadius: "20px",
            }}
          />
        </div>
      );
    })}
  </section>
  
  );
};

export default Paket;
