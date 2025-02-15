import React, { useState, useEffect } from "react";
import axios from "axios";

const Blog = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5;
  const [showModal, setShowModal] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedBlog, setEditedBlog] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:5000/blogs");
      setData(response.data);
    } catch (error) {
      console.error("Gagal mengambil data blog:", error);
    }
  };

  const handleEdit = (blog) => {
    setEditedBlog({
      title: blog.title,
      content: blog.content,
    });
    setSelectedBlog(blog);
    setEditMode(true);
    setShowModal(true);
  };

  const handleUpdateBlog = async () => {
    if (!editedBlog.title || !editedBlog.content) {
      alert("Judul dan Konten tidak boleh kosong!");
      return;
    }

    try {
      await axios.put(
        `http://localhost:5000/blogs/${selectedBlog.id}`,
        editedBlog
      );
      fetchBlogs();
      setShowModal(false);
    } catch (error) {
      console.error("Gagal memperbarui blog:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/blogs/${id}`);
      fetchBlogs();
    } catch (error) {
      console.error("Gagal menghapus blog:", error);
    }
  };

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastData);
  const totalPages = Math.ceil(data.length / dataPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="wrapper">
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Blog</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Blog</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <section className="content">
          <div className="container-fluid">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Judul Blog</th>
                  <th>Konten</th>
                  {/* <th>Gambar</th> */}
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((item, index) => (
                  <tr key={item.id}>
                    <td>{indexOfFirstData + index + 1}.</td>
                    <td>{item.title}</td>
                    <td>{item.content}</td>
                    {/* <td>
                      {item.image ? (
                        <img
                          src={item.image}
                          alt="Blog"
                          style={{ width: 50, height: 50 }}
                        />
                      ) : (
                        "Tidak ada gambar"
                      )}
                    </td> */}
                    <td>
                      <button
                        className="btn btn-sm btn-warning mr-2"
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(item.id)}
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
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
        </section>

        {/* Modal Edit */}
        {showModal && (
          <div className="modal" style={{ display: "block" }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Edit Blog</h5>
                  <button className="close" onClick={() => setShowModal(false)}>
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Judul"
                    value={editedBlog.title}
                    onChange={(e) =>
                      setEditedBlog({ ...editedBlog, title: e.target.value })
                    }
                  />
                  <textarea
                    className="form-control"
                    placeholder="Konten"
                    rows="3"
                    value={editedBlog.content}
                    onChange={(e) =>
                      setEditedBlog({ ...editedBlog, content: e.target.value })
                    }
                  />
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
                    onClick={handleUpdateBlog}
                  >
                    Simpan Perubahan
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

export default Blog;
