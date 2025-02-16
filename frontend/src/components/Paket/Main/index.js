import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Paket = () => {
  const [mountainTrips, setMountainTrips] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchMountainTrips = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/getMountaintrip"
        ); // Sesuaikan endpoint API
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
        const linkTo =
          layananSlug === "private trip"
            ? `/Paket/PrivateTrip`
            : `/Paket/OpenTrip/${trip.id}`;

        return (
          <div
            key={trip.id}
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row", // Mobile: kolom, Desktop: baris
              alignItems: "center",
              gap: isMobile ? "20px" : "300px",
              margin: "30px auto",
              maxWidth: "90%",
              textAlign: isMobile ? "center" : "left", // Pusatkan teks di mobile
            }}
          >
            {/* Gambar Ditaruh di Atas Saat Mobile */}
            {isMobile && (
              <img
                src={`http://localhost:5000/images/mountaintrip/${trip.foto}`}
                alt={trip.nama_layanan}
                style={{
                  maxWidth: "300px",
                  height: "auto",
                  borderRadius: "20px",
                }}
              />
            )}

            <div
              style={{
                flex: "1 1 50%",
                maxWidth: "500px",
              }}
            >
              <h3
                style={{
                  color: "#fff",
                  fontSize: isMobile ? "35px" : "50px", // Ukuran lebih kecil di mobile
                  marginBottom: "10px",
                }}
              >
                {trip.nama_layanan}
              </h3>
              <p
                style={{
                  color: "#fff",
                  fontSize: isMobile ? "18px" : "20px", // Sesuaikan font untuk mobile
                }}
              >
                {trip.deskripsi_layanan}
              </p>
              <Link
                to={linkTo}
                style={{
                  display: "inline-block",
                  marginTop: "15px",
                  padding: isMobile ? "8px 40px" : "10px 50px", // Tombol lebih kecil di mobile
                  fontSize: isMobile ? "20px" : "25px",
                  backgroundColor: "#FA8806",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: "5px",
                }}
              >
                Jelajahi
              </Link>
            </div>

            {/* Gambar di Sebelah Kanan Saat Desktop */}
            {!isMobile && (
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
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Paket;
