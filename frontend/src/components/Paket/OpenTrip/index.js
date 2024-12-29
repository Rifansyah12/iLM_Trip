import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Import semua gambar yang digunakan
import SampleImage1 from "../../../assets/Documentasi/OpenTrip/DO1.jpg";
import SampleImage2 from "../../../assets/Documentasi/OpenTrip/DO2.jpg";
import SampleImage3 from "../../../assets/Documentasi/OpenTrip/DO3.jpg";
import Merbabu from "../../../assets/Gunung/Merbabu/merbabu1.jpg";
import Prau1 from "../../../assets/Gunung/Prau/Prau1.jpg";
import Sindoro from "../../../assets/Gunung/Sindoro/sindoro1.jpeg";
import Sumbing from "../../../assets/Gunung/Sumbing/sumbing2.jpg";
import Papandayan from "../../../assets/Gunung/Papandayan/papandayan1.jpg";
import Pangrango from "../../../assets/Gunung/Pangrango/pangrango2.jpg";
import Sangar from "../../../assets/Gunung/SangarMega/mega.jpg";
import Gede from "../../../assets/Gunung/Gede/gede1.jpg";

const PrivateTrip = () => {
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
          <div style={{ flex: 2, textAlign: "left" }}>
            <p
              style={{
                fontSize: "18px",
                marginBottom: "100px",
                fontFamily: "'Belanosima', sans-serif",
              }}
            >
              Gunung Merbabu adalah salah satu gunung yang terletak di Jawa
              Tengah, Indonesia, dengan ketinggian sekitar 3.145 meter di atas
              permukaan laut. Gunung ini terkenal akan jalur pendakiannya yang
              indah, melewati padang rumput luas dan hutan pegunungan yang asri.
              Dari puncaknya, pendaki dapat menikmati pemandangan memukau,
              termasuk panorama Gunung Merapi, Sindoro, Sumbing, dan pegunungan
              lain di sekitarnya. Gunung Merbabu juga memiliki daya tarik berupa
              kawah-kawah kecil yang menambah keunikan pengalaman pendakian.
            </p>
          </div>
          <div style={{ flex: 2, textAlign: "center" }}>
            <img
              src={Merbabu}
              alt="Gunung Merbabu"
              style={{
                width: "300px", // Perkecil lebar gambar
                height: "300px",
                borderRadius: "10px",
                objectFit: "cover",
                marginTop: "-150px", // Gambar dinaikkan sedikit ke atas
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
          <div style={{ flex: 2, textAlign: "left" }}>
            <p
              style={{
                fontSize: "18px",
                marginBottom: "100px",
                fontFamily: "'Belanosima', sans-serif",
              }}
            >
              Gunung Prau adalah salah satu gunung yang terletak di Jawa Tengah,
              Indonesia, dengan ketinggian sekitar 2.565 meter di atas permukaan
              laut. Gunung ini dikenal dengan jalur pendakian yang relatif
              mudah, cocok bagi pendaki pemula maupun yang berpengalaman. Puncak
              Gunung Prau menawarkan pemandangan yang spektakuler, terutama saat
              matahari terbit, dengan latar belakang Gunung Sumbing, Sindoro,
              dan Merapi. Di puncaknya, pendaki dapat menikmati hamparan luas
              dan panorama pegunungan yang memukau, serta padang rumput yang
              indah. Gunung Prau juga sering menjadi pilihan bagi para pendaki
              yang mencari pengalaman pendakian yang santai namun tetap
              menyuguhkan pemandangan yang luar biasa.
            </p>
          </div>
          <div style={{ flex: 2, textAlign: "center" }}>
            <img
              src={Prau1}
              alt="Gunung Prau"
              style={{
                width: "300px", // Perkecil lebar gambar
                height: "300px",
                borderRadius: "10px",
                objectFit: "cover",
                marginTop: "-150px", // Gambar dinaikkan sedikit ke atas
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
          <div style={{ flex: 2, textAlign: "left" }}>
            <p
              style={{
                fontSize: "18px",
                marginBottom: "100px",
                fontFamily: "'Belanosima', sans-serif",
              }}
            >
              Gunung Sindoro adalah salah satu gunung berapi yang terletak di
              Jawa Tengah, Indonesia, dengan ketinggian sekitar 3.150 meter di
              atas permukaan laut. Gunung ini terkenal dengan jalur pendakiannya
              yang menantang dan pemandangan alam yang menakjubkan. Dari
              puncaknya, pendaki dapat menikmati panorama yang luas, termasuk
              pemandangan Gunung Sumbing, Gunung Merapi, serta lembah-lembah
              hijau di sekitarnya. Gunung Sindoro juga memiliki kawah yang indah
              dan udara yang sejuk, menjadikannya salah satu destinasi pendakian
              favorit di kawasan ini. Meskipun pendakiannya cukup berat,
              keindahan alam dan pemandangan spektakuler dari puncaknya membuat
              setiap langkah menuju puncak menjadi pengalaman yang tak
              terlupakan.
            </p>
          </div>
          <div style={{ flex: 2, textAlign: "center" }}>
            <img
              src={Sindoro}
              alt="Gunung Sindoro"
              style={{
                width: "300px", // Perkecil lebar gambar
                height: "300px",
                borderRadius: "10px",
                objectFit: "cover",
                marginTop: "-150px", // Gambar dinaikkan sedikit ke atas
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
          <div style={{ flex: 2, textAlign: "left" }}>
            <p
              style={{
                fontSize: "18px",
                marginBottom: "100px",
                fontFamily: "'Belanosima', sans-serif",
              }}
            >
              Gunung Sumbing adalah salah satu gunung tertinggi di Jawa Tengah,
              Indonesia, dengan ketinggian sekitar 3.371 meter di atas permukaan
              laut. Gunung ini terkenal dengan pemandangan yang menakjubkan dan
              jalur pendakian yang cukup menantang. Pendaki yang berhasil
              mencapai puncaknya akan disuguhi pemandangan spektakuler, termasuk
              panorama Gunung Sindoro, Gunung Merapi, serta lautan awan yang
              sering kali terlihat di bawahnya. Gunung Sumbing memiliki
              keindahan alam yang luar biasa, dengan hutan tropis yang lebat,
              padang rumput, dan kawah yang menambah daya tariknya. Meskipun
              jalurnya cukup sulit, keindahan yang didapat dari puncak Gunung
              Sumbing menjadikannya destinasi pendakian yang sangat dihargai
              oleh para pendaki.
            </p>
          </div>
          <div style={{ flex: 2, textAlign: "center" }}>
            <img
              src={Sumbing}
              alt="Gunung Sumbing"
              style={{
                width: "300px", // Perkecil lebar gambar
                height: "300px",
                borderRadius: "10px",
                objectFit: "cover",
                marginTop: "-150px", // Gambar dinaikkan sedikit ke atas
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

      {/* content trip  Papandayan*/}
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
          <div style={{ flex: 2, textAlign: "left" }}>
            <p
              style={{
                fontSize: "18px",
                marginBottom: "100px",
                fontFamily: "'Belanosima', sans-serif",
              }}
            >
              Gunung Papandayan adalah gunung berapi aktif yang terletak di Jawa
              Barat, Indonesia, dengan ketinggian sekitar 2.665 meter di atas
              permukaan laut. Gunung ini terkenal dengan pemandangan alam yang
              luar biasa, mulai dari padang rumput hijau, hutan tropis, hingga
              kawah aktif yang mengeluarkan asap dan gas vulkanik. Salah satu
              daya tarik utama Gunung Papandayan adalah kawah-kawahnya yang
              menampilkan fenomena alam yang unik, termasuk kawah belerang yang
              memancarkan aroma khas. Jalur pendakian di gunung ini relatif
              mudah, sehingga menjadi pilihan populer bagi para pendaki pemula
              maupun berpengalaman. Puncak Gunung Papandayan menawarkan
              pemandangan yang mempesona, dengan latar belakang pegunungan dan
              lautan awan yang menyelimuti.
            </p>
          </div>
          <div style={{ flex: 2, textAlign: "center" }}>
            <img
              src={Papandayan}
              alt="Gunung Papandayan"
              style={{
                width: "300px", // Perkecil lebar gambar
                height: "300px",
                borderRadius: "10px",
                objectFit: "cover",
                marginTop: "-150px", // Gambar dinaikkan sedikit ke atas
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
          <div style={{ flex: 2, textAlign: "left" }}>
            <p
              style={{
                fontSize: "18px",
                marginBottom: "100px",
                fontFamily: "'Belanosima', sans-serif",
              }}
            >
              Gunung Gede adalah gunung berapi yang terletak di Jawa Barat,
              Indonesia, dengan ketinggian sekitar 2.958 meter di atas permukaan
              laut. Gunung ini merupakan bagian dari Taman Nasional Gede
              Pangrango, yang dikenal dengan keindahan alamnya yang mempesona,
              mulai dari hutan tropis yang lebat hingga padang rumput yang luas.
              Jalur pendakian Gunung Gede cukup populer, terutama bagi pendaki
              yang ingin menikmati keindahan alam dan keanekaragaman hayati.
              Dari puncak Gunung Gede, pendaki dapat menikmati pemandangan
              spektakuler, termasuk Gunung Pangrango yang terletak di
              sebelahnya, serta hamparan awan yang menyelimuti lembah-lembah di
              sekitarnya. Gunung Gede juga memiliki kawah yang masih aktif, yang
              menjadi daya tarik tersendiri bagi para pendaki. Suasana sejuk dan
              udara yang segar menjadikan Gunung Gede sebagai tempat yang ideal
              untuk berpetualang di alam bebas.
            </p>
          </div>
          <div style={{ flex: 2, textAlign: "center" }}>
            <img
              src={Gede}
              alt="Gunung Gede"
              style={{
                width: "300px", // Perkecil lebar gambar
                height: "300px",
                borderRadius: "10px",
                objectFit: "cover",
                marginTop: "-150px", // Gambar dinaikkan sedikit ke atas
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
          <div style={{ flex: 2, textAlign: "left" }}>
            <p
              style={{
                fontSize: "18px",
                marginBottom: "100px",
                fontFamily: "'Belanosima', sans-serif",
              }}
            >
              Gunung Pangrango adalah gunung berapi yang terletak di Jawa Barat,
              Indonesia, dengan ketinggian sekitar 3.019 meter di atas permukaan
              laut. Gunung ini merupakan bagian dari Taman Nasional Gede
              Pangrango, bersama dengan Gunung Gede yang terletak di sebelahnya.
              Pendakian Gunung Pangrango menawarkan pemandangan alam yang luar
              biasa, dengan jalur yang melewati hutan tropis yang lebat, padang
              rumput, dan sumber air alami yang menyegarkan. Di sepanjang
              perjalanan, pendaki akan disuguhi pemandangan spektakuler,
              termasuk panorama Gunung Gede, lembah-lembah hijau, dan kawasan
              pegunungan lainnya. Puncak Gunung Pangrango memberikan pengalaman
              yang tak terlupakan, dengan udara segar dan pemandangan yang
              sangat memukau, terutama saat matahari terbit. Gunung Pangrango
              juga dikenal dengan vegetasi alpin yang sangat khas, serta kawah
              dan sumber air panasnya yang menarik. Sebagai bagian dari Taman
              Nasional Gede Pangrango, gunung ini menawarkan pengalaman
              pendakian yang menantang namun sangat memuaskan bagi para pecinta
              alam.
            </p>
          </div>
          <div style={{ flex: 1, textAlign: "center" }}>
            <img
              src={Pangrango}
              alt="Gunung Pangrango"
              style={{
                width: "300px", // Perkecil lebar gambar
                height: "300px",
                borderRadius: "10px",
                objectFit: "cover",
                marginTop: "-150px", // Gambar dinaikkan sedikit ke atas
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
            Gunung Sangar & Puncak Mega
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
          <div style={{ flex: 2, textAlign: "left" }}>
            <p
              style={{
                fontSize: "18px",
                marginBottom: "100px",
                fontFamily: "'Belanosima', sans-serif",
              }}
            >
              Gunung Sangar: Gunung Sangar adalah sebuah gunung yang terletak di
              kawasan Jawa Barat, Indonesia. Dengan ketinggian yang tidak begitu
              tinggi, Gunung Sangar menawarkan pengalaman pendakian yang lebih
              santai namun tetap memuaskan. Meskipun tidak setenar gunung-gunung
              lainnya, Gunung Sangar memiliki pesona alam yang luar biasa,
              dengan pemandangan yang menakjubkan dari puncaknya. Selama
              perjalanan pendakian, pendaki akan disuguhkan dengan hamparan
              pepohonan hijau yang lebat, padang rumput, dan udara sejuk yang
              menyegarkan. Gunung Sangar menjadi salah satu tujuan bagi para
              pendaki yang mencari pengalaman pendakian yang lebih tenang dan
              jauh dari keramaian.
            </p>

            <p
              style={{
                fontSize: "18px",
                marginBottom: "100px",
                fontFamily: "'Belanosima', sans-serif",
              }}
            >
              Puncak Mega: Puncak Mega, yang terletak di Jawa Barat, Indonesia,
              adalah salah satu puncak yang menantang bagi para pendaki yang
              menyukai petualangan alam. Dengan ketinggian yang cukup menjulang,
              Puncak Mega menawarkan pemandangan luar biasa dari atas, dengan
              panorama yang mencakup pegunungan dan lembah-lembah hijau yang
              luas. Pendakian menuju Puncak Mega akan membawa para pendaki
              melewati jalur yang cukup terjal, namun memberikan pengalaman yang
              sangat memuaskan saat mencapai puncak. Di sepanjang perjalanan,
              pendaki dapat menikmati keindahan alam, serta suasana sejuk dan
              udara segar yang menyegarkan. Puncak Mega juga menjadi tujuan
              populer bagi mereka yang ingin menikmati keindahan alam Jawa Barat
              dari ketinggian, serta sebagai tempat untuk merasakan kedamaian di
              tengah alam yang masih alami.
            </p>
          </div>
          <div style={{ flex: 1, textAlign: "center" }}>
            <img
              src={Sangar}
              alt="Gunung Sangar"
              style={{
                width: "300px", // Perkecil lebar gambar
                height: "300px",
                borderRadius: "10px",
                objectFit: "cover",
                marginTop: "-150px", // Gambar dinaikkan sedikit ke atas
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

export default PrivateTrip;
