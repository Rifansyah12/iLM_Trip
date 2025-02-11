import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5000";

// Daftar warna latar belakang untuk tiap id
const backgroundColors = [
  "bg-primary",
  "bg-success",
  "bg-danger",
  "bg-warning",
  "bg-info",
];

// Daftar ikon untuk tiap id
const icons = [
  "fas fa-hiking",
  "fas fa-mountain",
  "fas fa-campground",
  "fas fa-tree",
  "fas fa-water",
];

const Mountaintrip = () => {
  const [mountainTrips, setMountainTrips] = useState([]);

  // Fungsi untuk mengambil data dari backend
  const fetchMountainTrips = async () => {
    try {
      const response = await axios.get(`${API_URL}/getMountaintrip`);
      setMountainTrips(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchMountainTrips();
  }, []);

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">MountainTrip</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Dashboard v1</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <section className="content">
        {mountainTrips.length > 0 ? (
          <div className="d-flex flex-row flex-wrap gap-3 ">
            {mountainTrips.map((trip, index) => {
              // Ubah nama_layanan menjadi huruf kecil tanpa spasi
              const layanan = trip.nama_layanan
                .toLowerCase()
                .replace(/\s+/g, "");

              // Tentukan link berdasarkan nama_layanan
              let linkTarget = "/dashboard/mountaintrip/table/Gathering"; // Default

              if (layanan === "privatetrip") {
                linkTarget = "/dashboard/mountaintrip/table/private";
              } else {
                linkTarget = `/dashboard/mountaintrip/table/Open/${trip.id}`;
              }

              return (
                <div key={trip.id} className="col-lg-3 col-6">
                  <div
                    className={`small-box ${
                      backgroundColors[index % backgroundColors.length]
                    }`}
                  >
                    <div className="inner">
                      <h3 className="text-sm" style={{ fontSize: "18px" }}>
                        {trip.nama_layanan}
                      </h3>
                    </div>
                    <div className="icon">
                      <i
                        className={icons[index % icons.length]}
                        style={{ fontSize: "25px" }}
                      />
                    </div>
                    <Link to={linkTarget} className="small-box-footer">
                      views <i className="fas fa-arrow-circle-right" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-center">Loading data...</p>
        )}
      </section>
    </div>
  );
};

export default Mountaintrip;
