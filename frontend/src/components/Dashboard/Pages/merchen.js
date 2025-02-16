import React, { useState, useEffect } from "react";
import axios from "axios";

const Product = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5;
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    produk: "",
    harga: "",
    foto: null, // Menggunakan file, bukan URL
  });
  const [previewImage, setPreviewImage] = useState(null); // Pratinjau gambar

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/getProduct");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // 🔹 Fungsi untuk menangani perubahan input file
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Ambil file pertama
    if (file) {
      setNewProduct({ ...newProduct, foto: file });
      setPreviewImage(URL.createObjectURL(file)); // Buat URL pratinjau
    }
  };

  // 🔹 Fungsi menambah merchandise
  const handleAddProduct = async () => {
    try {
      const formData = new FormData();
      formData.append("produk", newProduct.produk);
      formData.append("harga", newProduct.harga);
      formData.append("foto", newProduct.foto);

      const response = await axios.post(
        "http://localhost:5000/createProduct",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setData([...data, response.data]);
      setShowModal(false);
      setNewProduct({ produk: "", harga: "", foto: null });
      setPreviewImage(null);
    } catch (error) {
      console.error("Error adding merchandise:", error);
    }
  };

  // 🔹 Fungsi menghapus merchandise
  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/deleteProduct/${id}`);
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting merchandise:", error);
    }
  };

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastData);

  return (
    <div className="wrapper">
      <div className="content-wrapper">
        <div className="content-header">
          <h1>Merchandise</h1>
        </div>

        <section className="content">
          <button
            className="btn btn-primary"
            onClick={() => setShowModal(true)}
          >
            Tambah Merchandise
          </button>

          <table className="table table-bordered">
            <thead>
              <tr>
                <th>No</th>
                <th>Produk</th>
                <th>Harga</th>
                <th>Foto</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((item, index) => (
                <tr key={item.id}>
                  <td>{indexOfFirstData + index + 1}.</td>
                  <td>{item.produk}</td>
                  <td>{item.harga}</td>
                  <td>
                    {item.foto ? (
                      <img
                        src={item.foto}
                        alt="Produk"
                        style={{ width: 50, height: 50 }}
                      />
                    ) : (
                      "Tidak ada foto"
                    )}
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDeleteProduct(item.id)}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <nav>
            <ul className="pagination">
              {[...Array(Math.ceil(data.length / dataPerPage))].map((_, i) => (
                <li
                  key={i}
                  className={`page-item ${
                    currentPage === i + 1 ? "active" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        {showModal && (
          <div className="modal" style={{ display: "block" }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Tambah Merchandise Baru</h5>
                  <button className="close" onClick={() => setShowModal(false)}>
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label>Nama Merchandise</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newProduct.produk}
                      onChange={(e) =>
                        setNewProduct({ ...newProduct, produk: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label>Harga</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newProduct.harga}
                      onChange={(e) =>
                        setNewProduct({ ...newProduct, harga: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label>Foto Merchandise</label>
                    <input
                      type="file"
                      className="form-control"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                    {previewImage && (
                      <img
                        src={previewImage}
                        alt="Pratinjau"
                        style={{ width: 100, height: 100, marginTop: 10 }}
                      />
                    )}
                  </div>
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
                    onClick={handleAddProduct}
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

export default Product;
