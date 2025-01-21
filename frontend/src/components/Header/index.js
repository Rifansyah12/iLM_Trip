import React from "react";
import Background from "../../assets/volcano-3779159_1280.png";
import NewImage from "../../assets/logo/Logo_trip.png"; // Gambar baru yang ditambahkan

function Header() {
  const headerStyle = {
    position: "relative",
    width: "100%",
    height: 671, // Tinggi gambar latar belakang
    overflow: "hidden",
  };

  const textStyle = {
    color: "#FFFCFC",
    fontSize: 50,
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
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Efek hitam transparan
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
        “Pilih Petualangan Anda, Capai Puncaknya!”
        <p
          style={{
            color: "#ffff",
            fontSize: 25,
            fontWeight: "50",
            fontFamily: "Poppins",
            width: "100%", // Sesuaikan lebar teks
            margin: "30px", // Agar teks tetap di tengah secara horizontal
            textAlign: "left",
          }}
        >
          Petualangan ini lebih dari sekedar perjalanan menuju puncak. Ini
          adalah pengalaman yang akan mengubah cara Anda merasakan dunia, penuh
          tantangan, keindahan, dan kebanggaan yang tak terlupakan
        </p>
        <button
          style={{
            width: 206,
            height: 47,
            background: "linear-gradient(90deg, white 0%, #FFD18F 100%)",
            borderRadius: 10,
            border: "none", // Menghapus border default button
            cursor: "pointer", // Menambahkan efek pointer saat hover
            fontSize: 30, // Ukuran font opsional
            fontWeight: "bold", // Bobot font opsional
            fontFamily: "Poppins, sans-serif", // Font opsional
            color: "#FA8806",
          }}
        >
          Explore
        </button>
      </div>
      <img
        className="NewImage" // Kelas untuk gambar baru
        style={newImageStyle} // Gaya untuk gambar baru
        src={NewImage} // Sumber gambar baru
        alt="New Image"
      />
    </header>
  );
}

export default Header;
