import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5000";

// ID untuk Premium Trip dan Luxury Trip
const premiumTripId = 1;
const luxuryTripId = 2;

const Mountaintrip = () => {
  const [premiumTrip, setPremiumTrip] = useState([]);
  const [luxuryTrip, setLuxuryTrip] = useState([]);

  // Fungsi untuk mengambil data Premium Trip
  const fetchPremiumTrip = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/getPrivatetripId/${premiumTripId}`
      );
      setPremiumTrip(response.data);
    } catch (error) {
      console.error("Error fetching premium trip data:", error);
    }
  };

  // Fungsi untuk mengambil data Luxury Trip
  const fetchLuxuryTrip = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/getPrivatetripId/${luxuryTripId}`
      );
      setLuxuryTrip(response.data);
    } catch (error) {
      console.error("Error fetching luxury trip data:", error);
    }
  };

  useEffect(() => {
    fetchPremiumTrip();
    fetchLuxuryTrip();
  }, []);

  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">PrivateTrip</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          {/* Small boxes (Stat box) */}
          <div
            className="row d-flex justify-content-center align-items-center"
            style={{ height: "70vh" }} // Tinggi agar vertikal rata tengah
          >
            {/* Premium Trip */}
            {premiumTrip && (
              <div className="col-lg-3 col-6">
                <div className="small-box bg-warning">
                  <div className="inner">
                    <h3>{premiumTrip.nama_paket}</h3>
                  </div>
                  <div className="icon">
                    <i className="fas fa-crown" />
                  </div>
                  <Link
                    to={`/dashboard/mountaintrip/table/private/premium`}
                    className="small-box-footer"
                  >
                    views <i className="fas fa-arrow-circle-right" />
                  </Link>
                </div>
              </div>
            )}
            {/* Luxury Trip */}
            {luxuryTrip && (
              <div className="col-lg-3 col-6">
                <div
                  className="small-box"
                  style={{ backgroundColor: "#4B0082", color: "#FFD700" }}
                >
                  <div className="inner">
                    <h3>{premiumTrip.nama_paket}</h3>
                  </div>
                  <div className="icon">
                    <i className="fas fa-gem" style={{ color: "#FFD700" }} />
                  </div>
                  <Link
                    to={`/dashboard/mountaintrip/table/private/luxury`}
                    className="small-box-footer"
                    style={{ color: "#FFD700" }}
                  >
                    views <i className="fas fa-arrow-circle-right" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mountaintrip;
