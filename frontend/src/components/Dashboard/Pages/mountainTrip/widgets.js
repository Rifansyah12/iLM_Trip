import React from "react";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import Footer from "../../Footer";

const Widgets = () => {
  return (
    <div className="wrapper">
      {/* Header */}
      <Header />

      {/* Sidebar */}
      <Sidebar />

      {/* Content Wrapper */}
      <section className="content">
        <div className="container-fluid">
          <h5 className="mb-2">Info Box</h5>
          <div className="row">
            <div className="col-md-3 col-sm-6 col-12">
              <div className="info-box">
                <span className="info-box-icon bg-info">
                  <i className="far fa-envelope" />
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">Messages</span>
                  <span className="info-box-number">1,410</span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
            </div>
            {/* /.col */}
            <div className="col-md-3 col-sm-6 col-12">
              <div className="info-box">
                <span className="info-box-icon bg-success">
                  <i className="far fa-flag" />
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">Bookmarks</span>
                  <span className="info-box-number">410</span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
            </div>
            {/* /.col */}
            <div className="col-md-3 col-sm-6 col-12">
              <div className="info-box">
                <span className="info-box-icon bg-warning">
                  <i className="far fa-copy" />
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">Uploads</span>
                  <span className="info-box-number">13,648</span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
            </div>
            {/* /.col */}
            <div className="col-md-3 col-sm-6 col-12">
              <div className="info-box">
                <span className="info-box-icon bg-danger">
                  <i className="far fa-star" />
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">Likes</span>
                  <span className="info-box-number">93,139</span>
                </div>
                {/* /.info-box-content */}
              </div>
            </div>
          </div>
        </div>
        {/* /.container-fluid */}
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Widgets;
