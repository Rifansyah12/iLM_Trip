import React, { useState, useEffect } from "react";

const MountainTripTableFamily = () => {
  const [destinasi, setDestinasi] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [showModal, setShowModal] = useState(false);
  const [newDestinasi, setNewDestinasi] = useState({
    nama_layanan: "",
    harga: "",
    keterangan_layanan: "",
    deskripsi_layanan: "",
    lokasi: "",
    keterangan_singkat: "",
    foto: null,
  });

  const id_layanan = "1"; // Ganti dengan ID layanan yang sesuai

  useEffect(() => {
    fetch(`http://localhost:5000/getDestinasiByIdMountrip/${id_layanan}`)
      .then((response) => response.json())
      .then((data) => setDestinasi(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleFileChange = (e) => {
    setNewDestinasi({ ...newDestinasi, foto: e.target.files[0] });
  };

  const handleAddDestinasi = async () => {
    const formData = new FormData();
    formData.append("nama_layanan", newDestinasi.nama_layanan);
    formData.append("harga", newDestinasi.harga);
    formData.append("keterangan_layanan", newDestinasi.keterangan_layanan);
    formData.append("deskripsi_layanan", newDestinasi.deskripsi_layanan);
    formData.append("lokasi", newDestinasi.lokasi);
    formData.append("keterangan_singkat", newDestinasi.keterangan_singkat);
    formData.append("foto", newDestinasi.foto);

    try {
      const response = await fetch(
        `http://localhost:5000/createDestinasi/${id_layanan}`,
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();
      if (response.ok) {
        alert("Paket wisata berhasil ditambahkan");
        setShowModal(false);
        setDestinasi([...destinasi, newDestinasi]); // Update daftar destinasi
      } else {
        alert(result.msg || "Gagal menambahkan paket wisata");
      }
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  const indexOfLastData = currentPage * itemsPerPage;
  const indexOfFirstData = indexOfLastData - itemsPerPage;
  const currentData = destinasi.slice(indexOfFirstData, indexOfLastData);
  const totalPages = Math.ceil(destinasi.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="wrapper">
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Family Trip</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">FamilyTrip</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <section className="content">
          <div className="container-fluid">
            <div className="mb-3">
              <button
                className="btn btn-primary"
                onClick={() => setShowModal(true)}
              >
                Tambah Paket Wisata
              </button>
            </div>

            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Paket</th>
                    <th>Nama Gunung</th>
                    <th>Lokasi</th>
                    <th>Harga</th>
                    <th>Foto</th>
                    <th>Keterangan</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.map((item, index) => (
                    <tr key={item.id}>
                      <td>{indexOfFirstData + index + 1}.</td>
                      <td>{item.nama_layanan}</td>
                      <td>{item.nama_gunung}</td>
                      <td>{item.lokasi}</td>
                      <td>{item.harga}</td>
                      <td>
                        {item.foto ? (
                          <img
                            src={item.foto}
                            alt={item.nama_gunung}
                            style={{ width: 50, height: 50 }}
                          />
                        ) : (
                          "Tidak ada foto"
                        )}
                      </td>
                      <td>{item.keterangan_layanan}</td>
                      <td>
                        <div className="d-flex">
                          <button className="btn btn-sm btn-warning mr-2">
                            Edit
                          </button>
                          <button className="btn btn-sm btn-danger">
                            Hapus
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <nav>
                <ul className="pagination">
                  {[...Array(totalPages)].map((_, i) => (
                    <li
                      key={i}
                      className={`page-item ${
                        currentPage === i + 1 ? "active" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(i + 1)}
                      >
                        {i + 1}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </section>

        {showModal && (
          <div className="modal" style={{ display: "block" }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Tambah Paket Wisata</h5>
                  <button className="close" onClick={() => setShowModal(false)}>
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <input
                    type="text"
                    placeholder="Nama Layanan"
                    className="form-control mb-2"
                    onChange={(e) =>
                      setNewDestinasi({
                        ...newDestinasi,
                        nama_layanan: e.target.value,
                      })
                    }
                  />

                  <input
                    type="text"
                    placeholder="Harga"
                    className="form-control mb-2"
                    onChange={(e) =>
                      setNewDestinasi({
                        ...newDestinasi,
                        harga: e.target.value,
                      })
                    }
                  />

                  <input
                    type="text"
                    placeholder="Lokasi"
                    className="form-control mb-2"
                    onChange={(e) =>
                      setNewDestinasi({
                        ...newDestinasi,
                        lokasi: e.target.value,
                      })
                    }
                  />

                  <input
                    type="file"
                    className="form-control mb-2"
                    onChange={handleFileChange}
                  />

                  <textarea
                    placeholder="Keterangan Layanan"
                    className="form-control mb-2"
                    onChange={(e) =>
                      setNewDestinasi({
                        ...newDestinasi,
                        keterangan_layanan: e.target.value,
                      })
                    }
                  ></textarea>

                  <textarea
                    placeholder="Deskripsi Layanan"
                    className="form-control mb-2"
                    onChange={(e) =>
                      setNewDestinasi({
                        ...newDestinasi,
                        deskripsi_layanan: e.target.value,
                      })
                    }
                  ></textarea>
                </div>
                <div className="modal-footer">
                  <button
                    className="btn btn-secondary"
                    onClick={() => setShowModal(false)}
                  >
                    Batal
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={handleAddDestinasi}
                  >
                    Tambah
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MountainTripTableFamily;
