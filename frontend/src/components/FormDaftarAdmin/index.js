import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateAdmin = () => {
  const [nama, setNama] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [foto, setFoto] = useState(null);
  const [preview, setPreview] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  // Handle perubahan file foto
  const loadImage = (e) => {
    const file = e.target.files[0];
    setFoto(file);
    setPreview(URL.createObjectURL(file));
  };

  // Handle submit form
  const saveAdmin = async (e) => {
    e.preventDefault();
    if (!foto) {
      setMsg("Foto wajib diunggah!");
      return;
    }

    const formData = new FormData();
    formData.append("nama", nama);
    formData.append("username", username);
    formData.append("password", password);
    formData.append("confPassword", confPassword);
    formData.append("foto", foto);

    try {
      await axios.post("http://localhost:5000/createAdmin", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Admin berhasil ditambahkan! Anda akan diarahkan ke halaman login.");
      navigate("/Login"); // Redirect ke halaman login setelah sukses
    } catch (error) {
      setMsg(error.response?.data?.msg || "Terjadi kesalahan!");
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white text-center">
              <h4>Register Admin</h4>
            </div>
            <div className="card-body">
              {msg && <div className="alert alert-danger">{msg}</div>}

              <form onSubmit={saveAdmin}>
                <div className="mb-3">
                  <label className="form-label">Nama Lengkap</label>
                  <input
                    type="text"
                    className="form-control"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Konfirmasi Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={confPassword}
                    onChange={(e) => setConfPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Foto Profil</label>
                  <input type="file" className="form-control" onChange={loadImage} required />
                  {preview && (
                    <img src={preview} alt="Preview" className="mt-3 img-thumbnail" width="150" />
                  )}
                </div>

                <button type="submit" className="btn btn-success w-100">
                  Regis
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAdmin;
