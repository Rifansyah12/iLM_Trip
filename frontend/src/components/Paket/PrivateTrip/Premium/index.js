import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Import semua gambar yang digunakan
import SampleImage1 from "../../../../assets/Documentasi/OpenTrip/DO1.jpg";
import SampleImage2 from "../../../../assets/Documentasi/OpenTrip/DO2.jpg";
import SampleImage3 from "../../../../assets/Documentasi/OpenTrip/DO3.jpg";
import Merbabu from "../../../../assets/Gunung/Merbabu/merbabu1.jpg";
import Prau1 from "../../../../assets/Gunung/Prau/Prau1.jpg";
import Sindoro from "../../../../assets/Gunung/Sindoro/sindoro1.jpeg";
import Sumbing from "../../../../assets/Gunung/Sumbing/sumbing2.jpg";
import Papandayan from "../../../../assets/Gunung/Papandayan/papandayan1.jpg";
import Pangrango from "../../../../assets/Gunung/Pangrango/pangrango2.jpg";
import Sangar from "../../../../assets/Gunung/SangarMega/mega.jpg";
import Gede from "../../../../assets/Gunung/Gede/gede1.jpg";

const OpenTrip = () => {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false); // State untuk modal
  const [modalImage, setModalImage] = useState(""); // State untuk gambar yang ditampilkan di modal

  // Fungsi untuk membuka modal
  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setModalOpen(true);
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setModalOpen(false);
    setModalImage("");
  };

  return (
    <section
      style={{
        backgroundColor: "#222222", // Warna latar abu-abu gelap
        color: "#fff", // Warna teks putih
        padding: "50px", // Padding untuk tata letak rapi
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
      }}
    >
      {/* Judul */}
      <h1
        style={{
          fontSize: "30px",
          marginBottom: "20px",
          textAlign: "left", // Teks berada di sebelah kiri
          paddingBottom: "10px", // Memberi jarak antara teks dan garis
          fontFamily: "'Belanosima', sans-serif",
        }}
      >
        Temukan Destinasi Impian Anda
      </h1>

      {/* Kolom Pencarian */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "40px",
          gap: "10px",
          maxWidth: "600px", // Batas lebar pencarian
        }}
      >
        <input
          type="text"
          placeholder="Cari destinasi..."
          style={{
            flex: 1,
            padding: "12px",
            fontSize: "18px",
            border: "2px solid #FA8806",
            borderRadius: "5px",
            outline: "none",
          }}
        />
        <button
          style={{
            padding: "12px 20px",
            fontSize: "18px",
            backgroundColor: "#FA8806",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontFamily: "'Belanosima', sans-serif",
          }}
        >
          Cari
        </button>
      </div>

      <h1
        style={{
          fontSize: "50px",
          marginBottom: "20px",
          textAlign: "center",
          borderBottom: "4px solid #ffff",
          paddingBottom: "10px",
          display: "inline-block", // Tambahkan ini agar garis bawah sesuai panjang teks
          fontFamily: "'Belanosima', sans-serif",
        }}
      >
        LAYANAN MOUNTAIN TRIP :
      </h1>

      <div
        style={{
          display: "flex", // Mengatur konten saling berdampingan
          justifyContent: "space-between", // Memberikan ruang di antara kedua konten
          alignItems: "flex-start", // Menyelaraskan item di bagian atas
          gap: "20px", // Memberikan jarak antar konten
          margin: "20px auto", // Memberikan margin atas dan bawah
          maxWidth: "1600px", // Lebar maksimum container
        }}
      >
        {/* content trip Merbabu */}
        <div
          style={{
            maxWidth: "800px", // Menentukan lebar maksimum konten
            margin: "0 auto", // Membuat konten berada di tengah secara horizontal
          }}
        >
          <div style={{ textAlign: "left", marginTop: "20px" }}>
            <h2
              style={{
                fontSize: "36px",
                marginBottom: "10px",
                borderBottom: "2px solid #ffff",
                display: "inline-block",
                paddingBottom: "5px",
                width: "fit-content",
                fontFamily: "'Belanosima', sans-serif",
              }}
            >
              Gunung Merbabu
            </h2>
            <p
              style={{
                fontSize: "36px",
                marginTop: "10px",
                color: "#ccc",
                fontFamily: "'Belanosima', sans-serif",
              }}
            >
              Jawa Tengah, Indonesia
            </p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "0px",
            }}
          >
            <div style={{ flex: 2, textAlign: "center" }}>
              <img
                src={Merbabu}
                alt="Gunung Merbabu"
                style={{
                  width: "300px", // Perkecil lebar gambar
                  height: "180px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginTop: "-10px", // Gambar dinaikkan sedikit ke atas
                }}
              />
              <p
                style={{
                  fontSize: "40px",
                  color: "#ffff",
                  marginTop: "10px",
                  fontFamily: "'Belanosima', sans-serif",
                }}
              >
                Medium Trip
              </p>
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              marginTop: "20px",
              paddingBottom: "20px",
            }}
          >
            <button
              onClick={() => navigate("/Paket/OpenTrip/Gunung/merbabu")}
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "10px",
                backgroundColor: "#FA8806",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                padding: "10px 20px",
                cursor: "pointer",
                fontFamily: "'Belanosima', sans-serif",
              }}
            >
              IDR. 500.000 / Jelajahi
            </button>
            <div
              style={{
                marginTop: "10px",
                borderTop: "1px solid #ccc",
                width: "100%",
              }}
            ></div>
          </div>
        </div>
        {/* end content trip Merbabu*/}

        {/* content trip Prau */}
        <div
          style={{
            maxWidth: "800px", // Menentukan lebar maksimum konten
            margin: "0 auto", // Membuat konten berada di tengah secara horizontal
          }}
        >
          <div style={{ textAlign: "left", marginTop: "20px" }}>
            <h2
              style={{
                fontSize: "36px",
                marginBottom: "10px",
                borderBottom: "2px solid #ffff",
                display: "inline-block",
                paddingBottom: "5px",
                width: "fit-content",
                fontFamily: "'Belanosima', sans-serif",
              }}
            >
              Gunung Prau
            </h2>
            <p
              style={{
                fontSize: "36px",
                marginTop: "10px",
                color: "#ccc",
                fontFamily: "'Belanosima', sans-serif",
              }}
            >
              Jawa Tengah, Indonesia
            </p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "0px",
            }}
          >
            <div style={{ flex: 2, textAlign: "center" }}>
              <img
                src={Prau1}
                alt="Gunung Prau"
                style={{
                  width: "300px", // Perkecil lebar gambar
                  height: "180px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginTop: "-10px", // Gambar dinaikkan sedikit ke atas
                }}
              />
              <p
                style={{
                  fontSize: "40px",
                  color: "#ffff",
                  marginTop: "10px",
                  fontFamily: "'Belanosima', sans-serif",
                }}
              >
                Medium Trip
              </p>
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              marginTop: "20px",
              paddingBottom: "20px",
            }}
          >
            <button
              onClick={() => navigate("/Paket/OpenTrip/Gunung/prau")}
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "10px",
                backgroundColor: "#FA8806",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                padding: "10px 20px",
                cursor: "pointer",
                fontFamily: "'Belanosima', sans-serif",
              }}
            >
              IDR. 500.000 / Jelajahi
            </button>
            <div
              style={{
                marginTop: "10px",
                borderTop: "1px solid #ccc",
                width: "100%",
              }}
            ></div>
          </div>
        </div>
        {/* end content trip Prau */}

        {/* content trip Sindoro */}
        <div
          style={{
            maxWidth: "800px", // Menentukan lebar maksimum konten
            margin: "0 auto", // Membuat konten berada di tengah secara horizontal
          }}
        >
          <div style={{ textAlign: "left", marginTop: "20px" }}>
            <h2
              style={{
                fontSize: "36px",
                marginBottom: "10px",
                borderBottom: "2px solid #ffff",
                display: "inline-block",
                paddingBottom: "5px",
                width: "fit-content",
                fontFamily: "'Belanosima', sans-serif",
              }}
            >
              Gunung Sindoro
            </h2>
            <p
              style={{
                fontSize: "36px",
                marginTop: "10px",
                color: "#ccc",
                fontFamily: "'Belanosima', sans-serif",
              }}
            >
              Jawa Tengah, Indonesia
            </p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "0px",
            }}
          >
            <div style={{ flex: 2, textAlign: "center" }}>
              <img
                src={Sindoro}
                alt="Gunung Sindoro"
                style={{
                  width: "300px", // Perkecil lebar gambar
                  height: "180px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginTop: "-10px", // Gambar dinaikkan sedikit ke atas
                }}
              />
              <p
                style={{
                  fontSize: "40px",
                  color: "#ffff",
                  marginTop: "10px",
                  fontFamily: "'Belanosima', sans-serif",
                }}
              >
                Medium Trip
              </p>
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              marginTop: "20px",
              paddingBottom: "20px",
            }}
          >
            <button
              onClick={() => navigate("/Paket/OpenTrip/Gunung/sindoro")}
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "10px",
                backgroundColor: "#FA8806",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                padding: "10px 20px",
                cursor: "pointer",
                fontFamily: "'Belanosima', sans-serif",
              }}
            >
              IDR. 500.000 / Jelajahi
            </button>
            <div
              style={{
                marginTop: "10px",
                borderTop: "1px solid #ccc",
                width: "100%",
              }}
            ></div>
          </div>
        </div>
        {/* end content trip Sindoro */}

        {/* content trip  Sumbing*/}
        <div
          style={{
            maxWidth: "800px", // Menentukan lebar maksimum konten
            margin: "0 auto", // Membuat konten berada di tengah secara horizontal
          }}
        >
          <div style={{ textAlign: "left", marginTop: "20px" }}>
            <h2
              style={{
                fontSize: "36px",
                marginBottom: "10px",
                borderBottom: "2px solid #ffff",
                display: "inline-block",
                paddingBottom: "5px",
                width: "fit-content",
                fontFamily: "'Belanosima', sans-serif",
              }}
            >
              Gunung Sumbing
            </h2>
            <p
              style={{
                fontSize: "36px",
                marginTop: "10px",
                color: "#ccc",
                fontFamily: "'Belanosima', sans-serif",
              }}
            >
              Jawa Tengah, Indonesia
            </p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "0px",
            }}
          >
            <div style={{ flex: 2, textAlign: "center" }}>
              <img
                src={Sumbing}
                alt="Gunung Sumbing"
                style={{
                  width: "300px", // Perkecil lebar gambar
                  height: "180px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginTop: "-10px", // Gambar dinaikkan sedikit ke atas
                }}
              />
              <p
                style={{
                  fontSize: "40px",
                  color: "#ffff",
                  marginTop: "10px",
                  fontFamily: "'Belanosima', sans-serif",
                }}
              >
                Medium Trip
              </p>
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              marginTop: "20px",
              paddingBottom: "20px",
            }}
          >
            <button
              onClick={() => navigate("/Paket/OpenTrip/Gunung/sumbing")}
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "10px",
                backgroundColor: "#FA8806",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                padding: "10px 20px",
                cursor: "pointer",
                fontFamily: "'Belanosima', sans-serif",
              }}
            >
              IDR. 500.000 / Jelajahi
            </button>
            <div
              style={{
                marginTop: "10px",
                borderTop: "1px solid #ccc",
                width: "100%",
              }}
            ></div>
          </div>
        </div>
        {/* end content trip Sumbing*/}
      </div>
      <div
        style={{
          display: "flex", // Mengatur konten saling berdampingan
          justifyContent: "space-between", // Memberikan ruang di antara kedua konten
          alignItems: "flex-start", // Menyelaraskan item di bagian atas
          gap: "20px", // Memberikan jarak antar konten
          margin: "20px auto", // Memberikan margin atas dan bawah
          maxWidth: "1600px", // Lebar maksimum container
        }}
      >
        {/* content trip  Papandayan*/}
        <div
          style={{
            maxWidth: "800px", // Menentukan lebar maksimum konten
            margin: "0px auto", // Membuat konten berada di tengah secara horizontal
          }}
        >
          <div style={{ textAlign: "left", marginTop: "20px" }}>
            <h2
              style={{
                fontSize: "36px",
                marginBottom: "10px",
                borderBottom: "2px solid #ffff",
                display: "inline-block",
                paddingBottom: "5px",
                width: "fit-content",
                fontFamily: "'Belanosima', sans-serif",
              }}
            >
              Gunung Papandayan
            </h2>
            <p
              style={{
                fontSize: "36px",
                marginTop: "10px",
                color: "#ccc",
                fontFamily: "'Belanosima', sans-serif",
              }}
            >
              Jawa Barat, Indonesia
            </p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "0px",
            }}
          >
            <div style={{ flex: 2, textAlign: "center" }}>
              <img
                src={Papandayan}
                alt="Gunung Papandayan"
                style={{
                  width: "300px", // Perkecil lebar gambar
                  height: "180px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginTop: "-10px", // Gambar dinaikkan sedikit ke atas
                }}
              />
              <p
                style={{
                  fontSize: "40px",
                  color: "#ffff",
                  marginTop: "10px",
                  fontFamily: "'Belanosima', sans-serif",
                }}
              >
                Medium Trip
              </p>
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              marginTop: "20px",
              paddingBottom: "20px",
            }}
          >
            <button
              onClick={() => navigate("/Paket/OpenTrip/Gunung/papandayan")}
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "10px",
                backgroundColor: "#FA8806",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                padding: "10px 20px",
                cursor: "pointer",
                fontFamily: "'Belanosima', sans-serif",
              }}
            >
              IDR. 500.000 / Jelajahi
            </button>
            <div
              style={{
                marginTop: "10px",
                borderTop: "1px solid #ccc",
                width: "100%",
              }}
            ></div>
          </div>
        </div>
        {/* end content trip Papandayan*/}

        {/* content trip  Gede*/}
        <div
          style={{
            maxWidth: "800px", // Menentukan lebar maksimum konten
            margin: "-43 auto", // Membuat konten berada di tengah secara horizontal
          }}
        >
          <div style={{ textAlign: "left", marginTop: "20px" }}>
            <h2
              style={{
                fontSize: "36px",
                marginBottom: "10px",
                borderBottom: "2px solid #ffff",
                display: "inline-block",
                paddingBottom: "5px",
                width: "fit-content",
                fontFamily: "'Belanosima', sans-serif",
              }}
            >
              Gunung Gede
            </h2>
            <p
              style={{
                fontSize: "36px",
                marginTop: "10px",
                color: "#ccc",
                fontFamily: "'Belanosima', sans-serif",
              }}
            >
              Jawa Barat, Indonesia
            </p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "0px",
            }}
          >
            <div style={{ flex: 2, textAlign: "center" }}>
              <img
                src={Gede}
                alt="Gunung Gede"
                style={{
                  width: "300px", // Perkecil lebar gambar
                  height: "180px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginTop: "-10px", // Gambar dinaikkan sedikit ke atas
                }}
              />
              <p
                style={{
                  fontSize: "40px",
                  color: "#ffff",
                  marginTop: "10px",
                  fontFamily: "'Belanosima', sans-serif",
                }}
              >
                Medium Trip
              </p>
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              marginTop: "20px",
              paddingBottom: "20px",
            }}
          >
            <button
              onClick={() => navigate("/Paket/OpenTrip/Gunung/gede")}
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "10px",
                backgroundColor: "#FA8806",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                padding: "10px 20px",
                cursor: "pointer",
                fontFamily: "'Belanosima', sans-serif",
              }}
            >
              IDR. 500.000 / Jelajahi
            </button>
            <div
              style={{
                marginTop: "10px",
                borderTop: "1px solid #ccc",
                width: "100%",
              }}
            ></div>
          </div>
        </div>
        {/* end content trip Gde*/}

        {/* content trip  Pangrango*/}
        <div
          style={{
            maxWidth: "800px", // Menentukan lebar maksimum konten
            margin: "0 auto", // Membuat konten berada di tengah secara horizontal
          }}
        >
          <div style={{ textAlign: "left", marginTop: "20px" }}>
            <h2
              style={{
                fontSize: "36px",
                marginBottom: "10px",
                borderBottom: "2px solid #ffff",
                display: "inline-block",
                paddingBottom: "5px",
                width: "fit-content",
                fontFamily: "'Belanosima', sans-serif",
              }}
            >
              Gunung Pangrango
            </h2>
            <p
              style={{
                fontSize: "36px",
                marginTop: "10px",
                color: "#ccc",
                fontFamily: "'Belanosima', sans-serif",
              }}
            >
              Jawa Barat, Indonesia
            </p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "0px",
            }}
          >
            <div style={{ flex: 1, textAlign: "center" }}>
              <img
                src={Pangrango}
                alt="Gunung Pangrango"
                style={{
                  width: "300px", // Perkecil lebar gambar
                  height: "180px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginTop: "-10px", // Gambar dinaikkan sedikit ke atas
                }}
              />
              <p
                style={{
                  fontSize: "40px",
                  color: "#ffff",
                  marginTop: "10px",
                  fontFamily: "'Belanosima', sans-serif",
                }}
              >
                Medium Trip
              </p>
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              marginTop: "20px",
              paddingBottom: "20px",
            }}
          >
            <button
              onClick={() => navigate("/Paket/OpenTrip/Gunung/prau")}
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "10px",
                backgroundColor: "#FA8806",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                padding: "10px 20px",
                cursor: "pointer",
                fontFamily: "'Belanosima', sans-serif",
              }}
            >
              IDR. 500.000 / Jelajahi
            </button>
            <div
              style={{
                marginTop: "10px",
                borderTop: "1px solid #ccc",
                width: "100%",
              }}
            ></div>
          </div>
        </div>
        {/* end content trip Pangrango*/}

        {/* content trip  Sanggar*/}
        <div
          style={{
            maxWidth: "800px", // Menentukan lebar maksimum konten
            margin: "-43 auto", // Membuat konten berada di tengah secara horizontal
          }}
        >
          <div style={{ textAlign: "left", marginTop: "20px" }}>
            <h2
              style={{
                fontSize: "36px",
                marginBottom: "10px",
                borderBottom: "2px solid #ffff",
                display: "inline-block",
                paddingBottom: "5px",
                width: "fit-content",
                fontFamily: "'Belanosima', sans-serif",
              }}
            >
              Gunung Sangar
            </h2>
            <p
              style={{
                fontSize: "36px",
                marginTop: "10px",
                color: "#ccc",
                fontFamily: "'Belanosima', sans-serif",
              }}
            >
              Jawa Barat, Indonesia
            </p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "0px",
            }}
          >
            <div style={{ flex: 1, textAlign: "center" }}>
              <img
                src={Sangar}
                alt="Gunung Sangar"
                style={{
                  width: "300px", // Perkecil lebar gambar
                  height: "180px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginTop: "-10px", // Gambar dinaikkan sedikit ke atas
                }}
              />
              <p
                style={{
                  fontSize: "40px",
                  color: "#ffff",
                  marginTop: "10px",
                  fontFamily: "'Belanosima', sans-serif",
                }}
              >
                Medium Trip
              </p>
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              marginTop: "20px",
              paddingBottom: "20px",
            }}
          >
            <button
              onClick={() => navigate("/Paket/OpenTrip/Gunung/sangar")}
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "10px",
                backgroundColor: "#FA8806",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                padding: "10px 20px",
                cursor: "pointer",
                fontFamily: "'Belanosima', sans-serif",
              }}
            >
              IDR. 500.000 / Jelajahi
            </button>
            <div
              style={{
                marginTop: "10px",
                borderTop: "1px solid #ccc",
                width: "100%",
              }}
            ></div>
          </div>
        </div>
      </div>
      {/* end content trip Sanggar*/}

      {/* Tombol Navigasi */}
      {/* <div style={{ display: "flex", gap: "20px" }}>
        <button
          onClick={() => navigate("/")} // Navigasi kembali ke halaman utama
          style={{
            padding: "15px 30px",
            fontSize: "18px",
            backgroundColor: "#FA8806",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Kembali ke Beranda
        </button>

        <button
          onClick={() => navigate("/booking")} // Navigasi ke halaman booking
          style={{
            padding: "15px 30px",
            fontSize: "18px",
            backgroundColor: "#0066FF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Pesan Sekarang
        </button>
      </div> */}

      {/* Galeri Foto */}
      <div
        style={{
          marginTop: "30px",
          backgroundColor: "#111",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h2
          style={{
            color: "#FA8806",
            marginBottom: "20px",
            textAlign: "left",
          }}
        >
          Galeri Foto Perjalanan
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
          }}
        >
          {/* Tambahkan onClick ke setiap gambar */}
          <img
            src={SampleImage1}
            alt="Foto 1"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              cursor: "pointer",
            }}
            onClick={() => openModal(SampleImage1)}
          />
          <img
            src={SampleImage2}
            alt="Foto 1"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              cursor: "pointer",
            }}
            onClick={() => openModal(SampleImage1)}
          />
          <img
            src={SampleImage3}
            alt="Foto 1"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              cursor: "pointer",
            }}
            onClick={() => openModal(SampleImage1)}
          />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={closeModal} // Klik luar modal untuk menutup
        >
          <img
            src={modalImage}
            alt="Modal View"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "10px",
            }}
          />
        </div>
      )}
    </section>
  );
};

export default OpenTrip;
