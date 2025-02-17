import React, { useState, useEffect } from "react";
import axios from "axios";
// import "../../../../Modal.css";

const DataPesertaBaru = () => {
  const [data, setData] = useState([]);
  const [isFormVisible, setFormVisible] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [status, setStatus] = useState({}); // Status peserta
  const [peserta, setPeserta] = useState([]);
  const [peserta2, setPeserta2] = useState([]);
  

  const [formData, setFormData] = useState({
    nama_lengkap: "",
    email: "",
    alamat_lengkapi: "",
    domisili: "",
    nomer_telepon: "",
    nomertelp_darurat: "",
    pekerjaan: "",
    paket: "",
    fasilitas: "",
    meetingPoint: "",
    keterangan: "",
    kesehatan: "",
    fotoKtp: null,
  });

  // Mendapatkan daftar peserta saat komponen pertama kali dimuat
  useEffect(() => {
    const fetchPeserta = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/getPendaftaranPeserta"
        );
        setPeserta(response.data);
      } catch (error) {
        console.error("Error fetching peserta:", error);
      }
    };

    fetchPeserta();
  }, []);

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setError("Foto KTP harus di-upload");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("fotoKtp", file);
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    setLoading(true);
    try {
      const response = await axios.post(
        `http://localhost:5000/createPendaftaran/${13}`, // Sesuaikan id_destinasi dengan ID yang benar
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
      setLoading(false);

      // **Menampilkan alert sukses**
      alert("Data berhasil ditambahkan!");

      // **Menutup form modal**
      setFormVisible(false);

      // **Mengosongkan form**
      setFormData({
        nama_lengkap: "",
        email: "",
        alamat_lengkapi: "",
        domisili: "",
        nomer_telepon: "",
        nomertelp_darurat: "",
        pekerjaan: "",
        paket: "",
        fasilitas: "",
        meetingPoint: "",
        keterangan: "",
        kesehatan: "",
        fotoKtp: null,
      });
      setFile(null);

      // **Memperbarui daftar peserta tanpa reload halaman**
      refreshData();
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError(error.response?.data?.msg || "Terjadi kesalahan server");
    }
  };

  const refreshData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/getPendaftaranPeserta"
      );
      setPeserta(response.data);
    } catch (error) {
      console.error("Gagal memperbarui data:", error);
    }
  };
  useEffect(() => {
    fetchPeserta();
  }, []);

  const fetchPeserta = async () => {
    try {
<<<<<<< HEAD
      const response = await axios.put(
        `http://localhost:5000/updateStatus/${id}`,
        { status: isApproved ? "Disetujui" : "Ditolak" }
      );
=======
      const response = await axios.get("http://localhost:5000/getPendaftaranPeserta");
      setPeserta(response.data);
      
      // Simpan status berdasarkan ID peserta
      const statusMap = response.data.reduce((acc, item) => {
        acc[item.id] = item.status === "Disetujui";
        return acc;
      }, {});
      setStatus(statusMap);
    } catch (error) {
      console.error("Gagal mengambil data:", error);
    }
  };
>>>>>>> 461bff0 (Menambahkan perubahan terbaru)

  const handleApproval = async (id) => {
    try {
      await axios.put(`http://localhost:5000/updateStatus/${id}`, {
        status: "Disetujui",
      });

      setStatus((prevStatus) => ({
        ...prevStatus,
        [id]: true,
      }));

      alert("Status berhasil diperbarui!");
    } catch (error) {
      console.error("Gagal memperbarui status:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      // Mengirim request DELETE ke server
      const response = await axios.delete(
        `http://localhost:5000/deletePeserta/${id}` // Sesuaikan URL dengan backend
      );
      console.log("Peserta berhasil dihapus", response.data);

      // Menghapus data peserta dari state setelah berhasil dihapus
      setData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      console.error(
        "Gagal menghapus peserta:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="wrapper">
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <h1 className="m-0">Data Peserta Baru</h1>
          </div>
        </div>

        <section className="content">
          <div className="container-fluid">
            <button
              className="btn btn-primary mb-3"
              onClick={() => setFormVisible(true)}
            >
              Tambah Data Peserta
            </button>

            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama Lengkap</th>
                  <th>Email</th>
                  <th>Alamat</th>
                  <th>No. Telepon</th>
                  <th>Paket</th>
                  <th>Destinasi</th>
                  <th>Status</th>
                  <th>Opsi</th>
                </tr>
              </thead>
              <tbody>
                {peserta
                  .filter((item) => item.status !== "Disetujui") // Menyaring peserta yang belum disetujui
                  .map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.nama_lengkap}</td>
                      <td>{item.email}</td>
                      <td>{item.alamat_lengkapi}</td>
                      <td>{item.nomer_telepon}</td>
                      <td>{item.paket}</td>
                      <td>{item.destinasi?.nama_gunung || item.anothertrip?.nama_layanan}</td>

                      <td
                        style={{
                          color: status[item.id] ? "green" : "red",
                          fontWeight: "bold",
                        }}
                      >
                        {status[item.id] ? "Disetujui" : "Belum Disetujui"}
                      </td>
                      <td>
                        <button
                          className="btn btn-success btn-sm"
                         onClick={()=> handleApproval(item.id)} disabled={status[item.id]}
                        >
                         {status[item.id] ? "Disetujui" : "Belum Disetujui"}
                        </button>
                        <button
                          className="btn btn-danger btn-sm ml-2"
                          onClick={() => handleDelete(item.id)}
                        >
                          Hapus
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Modal Tambah Data */}
        {isFormVisible && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
            }}
          >
            <div
              style={{
                backgroundColor: "#fff",
                padding: "30px",
                borderRadius: "8px",
                width: "80%",
                maxWidth: "600px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h5
                style={{
                  textAlign: "center",
                  fontSize: "1.5rem",
                  marginBottom: "20px",
                }}
              >
                Data Peserta
              </h5>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "20px",
                }}
              >
                <div style={{ width: "48%" }}>
                  <input
                    type="text"
                    name="nama_lengkap"
                    value={formData.nama_lengkap}
                    onChange={handleInputChange}
                    placeholder="Nama"
                    style={{
                      width: "100%",
                      padding: "10px",
                      marginBottom: "15px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      fontSize: "1rem",
                    }}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    style={{
                      width: "100%",
                      padding: "10px",
                      marginBottom: "15px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      fontSize: "1rem",
                    }}
                  />
                  <input
                    type="text"
                    name="alamat_lengkapi"
                    value={formData.alamat_lengkapi}
                    onChange={handleInputChange}
                    placeholder="Alamat"
                    style={{
                      width: "100%",
                      padding: "10px",
                      marginBottom: "15px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      fontSize: "1rem",
                    }}
                  />
                  <input
                    type="text"
                    name="domisili"
                    value={formData.domisili}
                    onChange={handleInputChange}
                    placeholder="Domisili"
                    style={{
                      width: "100%",
                      padding: "10px",
                      marginBottom: "15px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      fontSize: "1rem",
                    }}
                  />
                  <input
                    type="text"
                    name="nomer_telepon"
                    value={formData.nomer_telepon}
                    onChange={handleInputChange}
                    placeholder="No. Telepon"
                    style={{
                      width: "100%",
                      padding: "10px",
                      marginBottom: "15px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      fontSize: "1rem",
                    }}
                  />
                  <input
                    type="text"
                    name="nomertelp_darurat"
                    value={formData.nomertelp_darurat}
                    onChange={handleInputChange}
                    placeholder="No. Darurat"
                    style={{
                      width: "100%",
                      padding: "10px",
                      marginBottom: "15px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      fontSize: "1rem",
                    }}
                  />
                  <input
                    type="text"
                    name="pekerjaan"
                    value={formData.pekerjaan}
                    onChange={handleInputChange}
                    placeholder="Pekerjaan"
                    style={{
                      width: "100%",
                      padding: "10px",
                      marginBottom: "15px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      fontSize: "1rem",
                    }}
                  />
                  <input
                    type="text"
                    name="kesehatan"
                    value={formData.kesehatan}
                    onChange={handleInputChange}
                    placeholder="Kesehatan"
                    style={{
                      width: "100%",
                      padding: "10px",
                      marginBottom: "15px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      fontSize: "1rem",
                    }}
                  />
                </div>
                <div style={{ width: "48%" }}>
                  <input
                    type="text"
                    name="paket"
                    value={formData.paket}
                    onChange={handleInputChange}
                    placeholder="Paket"
                    style={{
                      width: "100%",
                      padding: "10px",
                      marginBottom: "15px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      fontSize: "1rem",
                    }}
                  />
                  <input
                    type="text"
                    name="fasilitas"
                    value={formData.fasilitas}
                    onChange={handleInputChange}
                    placeholder="Fasilitas"
                    style={{
                      width: "100%",
                      padding: "10px",
                      marginBottom: "15px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      fontSize: "1rem",
                    }}
                  />
                  <input
                    type="text"
                    name="meetingPoint"
                    value={formData.meetingPoint}
                    onChange={handleInputChange}
                    placeholder="Meeting Point"
                    style={{
                      width: "100%",
                      padding: "10px",
                      marginBottom: "15px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      fontSize: "1rem",
                    }}
                  />
                  <input
                    type="text"
                    name="keterangan"
                    value={formData.keterangan}
                    onChange={handleInputChange}
                    placeholder="Keterangan"
                    style={{
                      width: "100%",
                      padding: "10px",
                      marginBottom: "15px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      fontSize: "1rem",
                    }}
                  />
                  <label style={{ fontSize: "1rem", marginBottom: "5px" }}>
                    Foto KTP
                  </label>
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleFileChange}
                    style={{
                      padding: "5px",
                      marginBottom: "15px",
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "20px",
                }}
              >
                {error && <p>{error}</p>}
                <button
                  onClick={handleSubmit}
                  style={{
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "5px",
                    backgroundColor: "#00FFFF",
                    color: "#00000",
                    fontSize: "1rem",
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                  }}
                >
                  {loading ? "Mengirim..." : "Kirim Pendaftaran"}
                </button>
                <button
                  onClick={() => setFormVisible(false)}
                  style={{
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "5px",
                    backgroundColor: "#ff4040",
                    color: "#fff",
                    fontSize: "1rem",
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                  }}
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal Lihat Detail */}
        {selectedData && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 1000,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px", // Tambahkan padding agar tidak terlalu mepet di layar kecil
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "12px",
                width: "90%", // Gunakan persentase agar lebih fleksibel
                maxWidth: "900px", // Batasi lebar maksimum agar tidak terlalu besar
                boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                fontFamily: "Arial, sans-serif",
              }}
            >
              <div style={{ textAlign: "center", marginBottom: "15px" }}>
                <h4
                  style={{
                    display: "inline-block", // Membuat h4 menjadi inline-block
                    fontWeight: "bold",
                    borderBottom: "2px solid #000",
                    paddingBottom: "10px",
                    width: "200px", // Ubah nilai ini sesuai keinginan agar garis lebih pendek
                  }}
                >
                  Data Peserta
                </h4>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <p>
                    <strong>Nama:</strong> {selectedData.nama_lengkap}
                  </p>
                  <p>
                    <strong>Email:</strong> {selectedData.email}
                  </p>
                  <p>
                    <strong>Alamat:</strong> {selectedData.alamat_lengkapi}
                  </p>
                  <p>
                    <strong>Domisili:</strong> {selectedData.domisili}
                  </p>
                  <p>
                    <strong>No Tlp:</strong> {selectedData.nomer_telepon}
                  </p>
                  <p>
                    <strong>No Darurat:</strong>{" "}
                    {selectedData.nomertelp_darurat}
                  </p>
                  <p>
                    <strong>Pekerjaan:</strong> {selectedData.pekerjaan}
                  </p>
                  <p>
                    <strong>Kesehatan:</strong> {selectedData.kesehatan}
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Paket:</strong> {selectedData.paket}
                  </p>
                  <p>
                    <strong>Fasilitas:</strong> {selectedData.fasilitas}
                  </p>
                  <p>
                    <strong>Meeting Point:</strong> {selectedData.meetingPoint}
                  </p>
                  <p>
                    <strong>Keterangan:</strong> {selectedData.keterangan}
                  </p>
                  {selectedData.fotoKtp && (
                    <div
                      style={{
                        marginTop: "10px",
                        border: "1px solid #ddd",
                        padding: "5px",
                        textAlign: "center",
                      }}
                    >
                      <img
                        src={`http://localhost:5000/images/fotoKtp/${selectedData.fotoKtp}`}
                        alt="Foto KTP"
                        style={{ width: "100px", borderRadius: "5px" }}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "20px",
                }}
              >
                <button
                  className="btn btn-success btn-sm"
                  onClick={() => handleApproval(selectedData.id, true)}
                >
                  Setujui
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => setSelectedData(null)}
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataPesertaBaru;
