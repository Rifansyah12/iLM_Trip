import React from "react";
import { Link } from "react-router-dom";

const Mountaintrip = () => {
  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">PrivateTrip</h1>
            </div>
            {/* /.col */}
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
      {/* /.content-header */}

      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          {/* Small boxes (Stat box) */}
          <div
            className="row d-flex justify-content-center align-items-center"
            style={{ height: "70vh" }} // Tinggi agar vertikal rata tengah
          >
            {/* Premium Trip */}
            <div className="col-lg-3 col-6">
              <div className="small-box bg-warning">
                <div className="inner">
                  <h3>Premium</h3>
                  <p>Mountain</p>
                </div>
                <div className="icon">
                  <i className="fas fa-crown" />
                </div>
                <Link
                  to="/dashboard/mountaintrip/table/private/premium"
                  className="small-box-footer"
                >
                  views <i className="fas fa-arrow-circle-right" />
                </Link>
              </div>
            </div>
            {/* /Premium Trip */}

            {/* Luxury Trip */}
            <div className="col-lg-3 col-6">
              <div
                className="small-box"
                style={{ backgroundColor: "#4B0082", color: "#FFD700" }}
              >
                <div className="inner">
                  <h3>Luxury Trip</h3>
                  <p>Mountain</p>
                </div>
                <div className="icon">
                  <i className="fas fa-gem" style={{ color: "#FFD700" }} />
                </div>
                <Link
                  to="/dashboard/mountaintrip/table/private/luxury"
                  className="small-box-footer"
                  style={{ color: "#FFD700" }}
                >
                  views <i className="fas fa-arrow-circle-right" />
                </Link>
              </div>
            </div>
            {/* /Luxury Trip */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mountaintrip;
