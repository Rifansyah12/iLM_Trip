import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"; // Impor useNavigate dan useParams
import axios from "axios"; // Impor axios
import Background1 from "../../../../../assets/Trip/bg2.png";
import Background2 from "../../../../../assets/Gunung/Merbabu/merbabu1.jpg";
import Background3 from "../../../../../assets/Gunung/Merbabu/merbabu2.jpg"; // Tambahkan gambar lain jika diperlukan

function Header() {
  const [currentImage, setCurrentImage] = useState(Background1); // Gambar pertama sebagai default

  // Gambar latar belakang yang akan diputar
  const backgroundImages = [Background1, Background2, Background3];

  const navigate = useNavigate(); // Gunakan useNavigate
  const { id_privatetrip } = useParams(); // Gunakan useParams
  const [item, setDestinasi] = useState([]);

  useEffect(() => {
    const fetchDestinasiByIdPrivate = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/getDestinasiByIdPrivate/${id_privatetrip}`
        );
        setDestinasi(response.data || []);
      } catch (error) {
        console.error("Error fetching destinasi:", error);
        setDestinasi([]);
      }
    };

    if (id_privatetrip) {
      fetchDestinasiByIdPrivate();
    }
  }, [id_privatetrip]);

  const headerStyle = {
    position: "relative",
    width: "100%",
    height: 400, // Tinggi gambar latar belakang
    overflow: "hidden",
  };

  const textStyle = {
    color: "#FFFCFC",
    fontSize: 50,
    fontFamily: "Beiruti",
    fontWeight: "500",
    wordWrap: "break-word",
    position: "absolute",
    top: 170, // Posisi vertikal teks
    left: 50, // Sama dengan padding kiri navbar
    paddingRight: 50, // Sama dengan padding kanan navbar
    zIndex: 1, // Pastikan teks berada di atas gambar
    maxWidth: "50%", // Membatasi lebar teks agar lebih rapat dengan gambar
  };

  const ratingContainerStyle = {
    position: "absolute",
    top: 165, // Jarak dari atas
    right: 50, // Jarak dari kanan
    fontFamily: "Poppins",
    textAlign: "center", // Menyesuaikan teks "Rating" di tengah bintang
    zIndex: 1, // Pastikan elemen berada di atas gambar
  };

  const ratingStyle = {
    fontSize: 50,
    color: "#FFFFFF", // Warna teks "Rating" diubah menjadi putih
  };

  const starsStyle = {
    display: "flex",
    justifyContent: "center", // Mengatur posisi bintang agar berjajar rapi
    marginTop: -15, // Jarak antara teks "Rating" dan bintang
    marginBottom: 10, // Jarak bawah antara bintang dan elemen lain
    fontSize: 100, // Ukuran bintang (semakin besar nilainya, semakin besar bintangnya)
  };

  const starStyle = {
    color: "#FFCD29", // Warna bintang tetap kuning
    fontSize: 70, // Ukuran bintang
    marginRight: 5, // Jarak antar bintang
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover", // Pastikan gambar tidak pecah
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 0, // Gambar berada di bawah teks
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Menambahkan lapisan hitam transparan
    zIndex: 0, // Overlay berada di atas gambar, tapi di bawah teks
  };

  return (
    <header style={headerStyle}>
      <img
        className="Volcano37791591280"
        style={imageStyle}
        src={currentImage} // Menggunakan gambar yang disimpan dalam state
        alt="Background"
      />
      <div style={overlayStyle}></div> {/* Overlay hitam transparan */}
      <div className="PilihPetualanganAndaCapaiPuncaknya" style={textStyle}>
        {/* Gantikan 'Gunung Gede' dengan nama destinasi yang didapatkan dari backend */}
        {item.nama_gunung || "Gunung Gede"}

        <p
          style={{
            color: "#FFA500",
            fontSize: 30,
            fontWeight: "100",
            fontFamily: "Poppins",
            width: "100%", // Sesuaikan lebar teks
            margin: "0px", // Agar teks tetap di tengah secara horizontal
            left: 50,
            textAlign: "left",
            fontStyle: "italic",
          }}
        >
          {/* Gantikan 'Premium' dengan jenis trip yang didapatkan dari backend */}
          {item.id_privatetrip || "Premium"}
        </p>

        <p
          style={{
            color: "#FFFFFF",
            fontSize: 30,
            fontWeight: "400",
            fontFamily: "Be Vietnam",
            textAlign: "left",
            marginTop: "20px", // Jarak antara teks Nikmati dan Lokasi
          }}
        >
          {/* Gantikan lokasi dengan data lokasi yang didapatkan dari backend */}
          {`LOKASI: ${item.lokasi || "Jawa Tengah, Indonesia"}`}
        </p>
      </div>
      {/* Rating Section */}
      <div style={ratingContainerStyle}>
        <div style={ratingStyle}>Ratings</div>{" "}
        {/* Warna teks "Rating" menjadi putih */}
        <div style={starsStyle}>
          <span style={starStyle}>★</span>
          <span style={starStyle}>★</span>
          <span style={starStyle}>★</span>
          <span style={starStyle}>★</span>
          <span style={starStyle}>★</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
