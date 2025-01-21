import React from "react";
import { Link } from "react-router-dom"; // Gunakan Link dari react-router-dom
import PrivateTripImage from "../../../assets/konten/konten.png";
import OpenTripImage from "../../../assets/konten/konten.png";
import FamilyTripImage from "../../../assets/konten/konten.png";
import GatheringImage from "../../../assets/konten/konten.png";

const Paket = () => {
  return (
    <section
      style={{
        backgroundColor: "#222222", // Warna abu-abu
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Private Trip */}
      <div
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
            Private Trip
          </h3>
          <p style={{ color: "#fff", fontSize: "20px" }}>
            Nikmati petualangan mendaki yang eksklusif dengan Paket Private Trip
            kami. Rasakan pengalaman mendaki gunung secara pribadi bersama
            orang-orang terdekat.
          </p>
          <Link
            to="/Paket/PrivateTrip"
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
          src={PrivateTripImage}
          alt="Private Trip"
          style={{
            flex: "1 1 40%",
            maxWidth: "300px",
            height: "auto",
            borderRadius: "20px",
          }}
        />
      </div>

      {/* Open Trip */}
      <div
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
            Open Trip
          </h3>
          <p style={{ color: "#fff", fontSize: "20px" }}>
            Bergabunglah dengan para pecinta alam dari berbagai penjuru dalam
            Open Trip kami.
          </p>
          <Link
            to="/Paket/OpenTrip"
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
          src={OpenTripImage}
          alt="Open Trip"
          style={{
            flex: "1 1 40%",
            maxWidth: "300px",
            height: "auto",
            borderRadius: "20px",
          }}
        />
      </div>

      {/* Family Trip */}
      <div
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
            Family Trip
          </h3>
          <p style={{ color: "#fff", fontSize: "20px" }}>
            Ciptakan kenangan tak terlupakan bersama keluarga dalam Family Trip
            kami.
          </p>
          <Link
            to="/Paket/FamilyTrip"
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
          src={FamilyTripImage}
          alt="Family Trip"
          style={{
            flex: "1 1 40%",
            maxWidth: "300px",
            height: "auto",
            borderRadius: "20px",
          }}
        />
      </div>

      {/* Gathering Kantor */}
      <div
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
            Gathering Kantor
          </h3>
          <p style={{ color: "#fff", fontSize: "20px" }}>
            Perkuat hubungan kerja tim Anda dengan Paket Gathering Kantor.
          </p>
          <Link
            to="/Paket/Gathering"
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
          src={GatheringImage}
          alt="Gathering Kantor"
          style={{
            flex: "1 1 40%",
            maxWidth: "300px",
            height: "auto",
            borderRadius: "20px",
          }}
        />
      </div>
    </section>
  );
};

export default Paket;
