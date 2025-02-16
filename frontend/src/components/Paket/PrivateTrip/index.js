import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const OpenTrip = ({ trip }) => {
  const navigate = useNavigate();
  const [trips, setTrips] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/getPrivatetrip"
        );
        setTrips(response.data.msg);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage("");
  };

  return (
    <section
      style={{
        backgroundColor: "#222222",
        color: "#fff",
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
      }}
    >
      <h1
        style={{
          fontSize: "30px",
          marginBottom: "20px",
          textAlign: "left",
          paddingBottom: "10px",
          fontFamily: "'Belanosima', sans-serif",
        }}
      >
        Temukan Destinasi Impian Anda
      </h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "40px",
          gap: "10px",
          maxWidth: "600px",
        }}
      >
        <input
          type="text"
          placeholder="Cari destinasi..."
          style={{
            flex: 1,
            padding: "12px",
            fontSize: "18px",
            border: "2px solid #FA8806",
            borderRadius: "5px",
            outline: "none",
          }}
        />
        <button
          style={{
            padding: "12px 20px",
            fontSize: "18px",
            backgroundColor: "#FA8806",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontFamily: "'Belanosima', sans-serif",
          }}
        >
          Cari
        </button>
      </div>
      <h1
        style={{
          fontSize: "50px",
          marginBottom: "20px",
          textAlign: "center",
          borderBottom: "4px solid #ffff",
          paddingBottom: "10px",
          display: "inline-block",
          fontFamily: "'Belanosima', sans-serif",
        }}
      >
        LAYANAN MOUNTAIN TRIP :
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {trips.map((trip) => (
          <div key={trip.id} style={{ maxWidth: "400px" }}>
            <div style={{ textAlign: "left", marginTop: "20px" }}>
              {/* Warna id 1 dan 2 berbeda yaaaaa */}
              <h2
                style={{
                  fontSize: "36px",
                  marginBottom: "10px",
                  borderBottom: "2px solid #ffff",
                  display: "inline-block",
                  paddingBottom: "5px",
                  width: "fit-content",
                  fontFamily: "'Belanosima', sans-serif",
                  color:
                    trip.id === 1
                      ? "#FFD700"
                      : trip.id === 2
                      ? "#00FFFF"
                      : "#FFFFFF", // Warna berbeda berdasarkan ID
                }}
              >
                {trip.nama_paket}
              </h2>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "0px",
              }}
            >
              <img
                src={`http://localhost:5000/images/privatetrip/${trip.foto}`}
                alt={trip.nama_paket}
                style={{
                  width: "300px",
                  height: "300px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginTop: "10px",
                }}
              />
            </div>
            <div
              style={{
                textAlign: "center",
                marginTop: "20px",
                paddingBottom: "20px",
              }}
            >
              <button
                onClick={() => {
                  setIsClicked(true);
                  setTimeout(() => setIsClicked(false), 200); // Efek klik sementara
                  navigate(`/Paket/PrivateTrip/Premium/${trip.id}`);
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "10px",
                  backgroundColor: isClicked
                    ? "#D96A00"
                    : isHovered
                    ? "#FFAA33"
                    : "#FA8806",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  padding: "10px 20px",
                  cursor: "pointer",
                  fontFamily: "'Belanosima', sans-serif",
                  transition: "background-color 0.3s ease-in-out",
                }}
              >
                IDR {trip.harga_paket} / Jelajahi
              </button>
              <div
                style={{
                  marginTop: "10px",
                  borderTop: "1px solid #ccc",
                  width: "100%",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OpenTrip;
