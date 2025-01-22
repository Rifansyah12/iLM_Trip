import React from "react";

const Mountaintrip = () => {
  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">MountainTrip</h1>
            </div>
            {/* /.col */}
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Dashboard v1</li>
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
          <div className="row">
            {/* ./col */}

            {/* /privatetrip */}
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-success">
                <div className="inner">
                  <h3>PrivateTrip</h3>
                  <p>Premium & Luxury</p>
                </div>
                <div className="icon">
                  {/* Menggunakan ikon yang mencerminkan perjalanan privat */}
                  <i className="fas fa-user-lock" />
                </div>
                <a href="#" className="small-box-footer">
                  Learn More <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
            {/* /Privatetrip */}

            {/* Opentrip */}
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-info">
                <div className="inner">
                  <h3>OpenTrip</h3>
                  <p>Mountain</p>
                </div>
                <div className="icon">
                  {/* Menggunakan ikon yang mencerminkan perjalanan */}
                  <i className="fas fa-plane-departure" />
                </div>
                <a href="#" className="small-box-footer">
                  View Trips <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
            {/* /Opentrip */}

            {/* ./FamilyTrip */}
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-warning">
                <div className="inner">
                  <h3>FamilyTrip</h3>
                  <p>Memorable Moments</p>
                </div>
                <div className="icon">
                  {/* Menggunakan ikon yang mencerminkan Family Trip */}
                  <i className="fas fa-users" />
                </div>
                <a href="#" className="small-box-footer">
                  Discover More <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
            {/* ./FamilyTrip */}

            {/* GatheringKantor */}
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-danger">
                <div className="inner">
                  <h1>Gathering</h1>
                  <h5> Kantor</h5>
                </div>
                <div className="icon">
                  {/* Menggunakan ikon yang mencerminkan Gathering Kantor */}
                  <i className="fas fa-briefcase" />
                </div>
                <a href="#" className="small-box-footer">
                  Learn More <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>

            {/* ./Gathering Kantor*/}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mountaintrip;
