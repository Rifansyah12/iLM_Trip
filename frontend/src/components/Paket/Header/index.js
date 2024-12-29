import React from "react";
import Background from "../../../assets/volcano-3779159_1280.png";

function Header() {
  const headerStyle = {
    position: "relative",
    width: "100%",
    height: 671, // Tinggi gambar latar belakang
    overflow: "hidden",
  };

  const textStyle = {
    color: "#FFFCFC",
    fontSize: 70,
    fontFamily: "Beiruti",
    fontWeight: "700",
    wordWrap: "break-word",
    position: "absolute",
    top: 180, // Posisi vertikal teks
    left: 50, // Sama dengan padding kiri navbar
    paddingRight: 50, // Sama dengan padding kanan navbar
    zIndex: 1, // Pastikan teks berada di atas gambar
    maxWidth: "50%", // Membatasi lebar teks agar lebih rapat dengan gambar
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
    zIndex: 0, // Overlay berada di atas gambar, tapi di bawah teks
  };

  const newImageStyle = {
    position: "absolute",
    top: 10, // Menempatkan gambar sedikit lebih rendah dari bagian atas
    right: 10, // Menempatkan gambar di sebelah kanan dengan jarak 10px dari tepi kanan
    width: "20%", // Memperkecil ukuran gambar menjadi 15% dari lebar elemen induk
    height: "auto", // Biarkan tinggi gambar proporsional dengan lebar
    zIndex: 1, // Pastikan gambar baru berada di atas gambar latar belakang
  };

  return (
    <header style={headerStyle}>
      <img
        className="Volcano37791591280"
        style={imageStyle}
        src={Background}
        alt="Background"
      />
      <div style={overlayStyle}></div> {/* Overlay hitam transparan */}
      <div className="PilihPetualanganAndaCapaiPuncaknya" style={textStyle}>
        Layanan
        <p
          style={{
            color: "#ffff",
            fontSize: 30,
            fontWeight: "50",
            fontFamily: "Poppins",
            width: "150%", // Sesuaikan lebar teks
            margin: "20px", // Agar teks tetap di tengah secara horizontal
            left: 50,
            textAlign: "left",
          }}
        >
          Temukan Keajaiban Alam Bersama Kami dan Rasakan sensasi mendaki gunung
          dengan kenyamanan dan fasilitas lengkap. Pilih paket favoritmu dan
          biarkan kami mengurus sisanya.
        </p>
      </div>
    </header>
  );
}

export default Header;
