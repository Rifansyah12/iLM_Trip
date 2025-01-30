import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Schedule = () => {
  return (
    <div className="wrapper">
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-succes">Schedule</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Schedule</li>
                </ol>
              </div>
            </div>

            {/* Mengatur tata letak Calendar & Schedule */}
            <div className="row">
              {/* Calendar lebih kecil di sebelah kiri */}
              <div className="col-md-4">
                <h2 className="text-primary">Kalender</h2>
                <Calendar />
              </div>

              {/* Schedule lebih lebar di sebelah kanan */}
              <div className="col-md-8 px-3">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Jadwal Perjalanan mendatang</h3>
                    <div className="card-tools">
                      <div
                        className="input-group input-group-sm"
                        style={{ width: 200 }}
                      >
                        <input
                          type="text"
                          name="table_search"
                          className="form-control float-right"
                          placeholder="Cari Jadwal"
                        />
                        <div className="input-group-append">
                          <button type="submit" className="btn btn-default">
                            <i className="fas fa-search" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tabel Jadwal */}
                  <div
                    className="card-body table-responsive p-0"
                    style={{ height: 285 }}
                  >
                    <table className="table table-bordered text-nowrap">
                      <thead className="bg-primary text-white">
                        <tr>
                          <th>ID</th>
                          <th>Nama Admin</th>
                          <th>Tanggal Perjalanan</th>
                          <th>Lokasi Trip</th>
                          <th>Status</th>
                          <th>Catatan</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>001</td>
                          <td>John Doe</td>
                          <td>12-10-2024</td>
                          <td>Gunung Rinjani</td>
                          <td>
                            <span className="badge badge-success">
                              Dijadwalkan
                            </span>
                          </td>
                          <td>Siapkan perlengkapan tambahan</td>
                        </tr>
                        <tr>
                          <td>002</td>
                          <td>Jane Smith</td>
                          <td>15-10-2024</td>
                          <td>Gunung Bromo</td>
                          <td>
                            <span className="badge badge-warning">
                              Tertunda
                            </span>
                          </td>
                          <td>Menunggu konfirmasi peserta</td>
                        </tr>
                        <tr>
                          <td>003</td>
                          <td>Michael Brown</td>
                          <td>20-10-2024</td>
                          <td>Gunung Semeru</td>
                          <td>
                            <span className="badge badge-danger">
                              Dibatalkan
                            </span>
                          </td>
                          <td>Cuaca buruk</td>
                        </tr>
                        <tr>
                          <td>004</td>
                          <td>Sarah Wilson</td>
                          <td>25-10-2024</td>
                          <td>Gunung Prau</td>
                          <td>
                            <span className="badge badge-primary">Selesai</span>
                          </td>
                          <td>Berjalan lancar</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* /.card */}
              </div>

              {/* Perjalanan yang telah selesai  */}
              <div className="col-md-12">
                <div className="table-wrapper">
                  <div className="card" style={{ width: "80%" }}>
                    <div className="card-header">
                      <h3 className="card-title">Perjalanan Selesai</h3>
                      <div className="card-tools">
                        <div
                          className="input-group input-group-sm"
                          style={{ width: 200 }}
                        >
                          <input
                            type="text"
                            name="table_search"
                            className="form-control float-right"
                            placeholder="Cari Jadwal"
                          />
                          <div className="input-group-append">
                            <button type="submit" className="btn btn-default">
                              <i className="fas fa-search" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tabel Jadwal */}
                    <div
                      className="card-body table-responsive p-0"
                      style={{ height: 400 }}
                    >
                      <table className="table table-bordered text-nowrap">
                        <thead className="bg-primary text-white">
                          <tr>
                            <th>ID</th>
                            <th>Nama Admin</th>
                            <th>Tanggal Perjalanan</th>
                            <th>Lokasi Trip</th>
                            <th>Status</th>
                            <th>Catatan</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>001</td>
                            <td>John Doe</td>
                            <td>12-10-2024</td>
                            <td>Gunung Rinjani</td>
                            <td>
                              <span className="badge badge-success">
                                Dijadwalkan
                              </span>
                            </td>
                            <td>Siapkan perlengkapan tambahan</td>
                          </tr>
                          <tr>
                            <td>002</td>
                            <td>Jane Smith</td>
                            <td>15-10-2024</td>
                            <td>Gunung Bromo</td>
                            <td>
                              <span className="badge badge-warning">
                                Tertunda
                              </span>
                            </td>
                            <td>Menunggu konfirmasi peserta</td>
                          </tr>
                          <tr>
                            <td>003</td>
                            <td>Michael Brown</td>
                            <td>20-10-2024</td>
                            <td>Gunung Semeru</td>
                            <td>
                              <span className="badge badge-danger">
                                Dibatalkan
                              </span>
                            </td>
                            <td>Cuaca buruk</td>
                          </tr>
                          <tr>
                            <td>004</td>
                            <td>Sarah Wilson</td>
                            <td>25-10-2024</td>
                            <td>Gunung Prau</td>
                            <td>
                              <span className="badge badge-primary">
                                Selesai
                              </span>
                            </td>
                            <td>Berjalan lancar</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /.row */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
