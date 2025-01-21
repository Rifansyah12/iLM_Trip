import React, { useState } from "react";
import NewImage from "../../assets/logo/Logo_trip2.png";
import Background from "../../assets/volcano-3779159_1280.png";

const containerStyle = {
  backgroundColor: "transparent",
  padding: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  backgroundImage: `url(${Background})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const formWrapperStyle = {
  backgroundColor: "rgb(8, 8, 8)",
  padding: "30px",
  borderRadius: "15px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
};

const formStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  color: "#FFFFFF",
  fontFamily: "Arial, sans-serif",
  padding: "20px",
  borderRadius: "10px",
  maxWidth: "100%",
  margin: "0 auto",
  boxShadow:
    "0 0 10pxrgba(255, 132, 0, 0.74), 0 0 20px #00FFFF, 0 0 30px #00FFFF, 0 0 40px #00FFFF",
};
// Style untuk elemen input, textarea, dan file input
const inputStyle = {
  marginBottom: "15px",
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #ced4da",
  width: "100%",
  fontSize: "14px",
  color: "#FFFFFF",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  outline: "none",
  transition: "border 0.3s ease",
};

const textareaStyle = {
  ...inputStyle,
  resize: "none",
  height: "80px",
};

const fileInputStyle = {
  ...inputStyle,
  padding: "8px",
  cursor: "pointer",
};

// Style untuk tombol
const CheckboxStyle = {
  marginRight: "10px",
};

// styles button submit
const buttonContainerStyle = {
  display: "flex",
  justifyContent: "flex-end", // Menempatkan tombol ke sebelah kanan
  marginTop: "20px", // Menambahkan jarak di atas tombol
};

const submitButtonStyle = {
  backgroundColor: "#28a745",
  color: "white",
  border: "none",
  padding: "10px 20px",
  cursor: "pointer",
  borderRadius: "5px",
  transition: "all 0.3s ease-in-out",
  opacity: 1, // Tampak normal saat tombol tidak disabled
  pointerEvents: "auto", // Menjaga interaksi tombol saat tidak disabled
  marginTop: "20px",
  // Gaya saat tombol dinonaktifkan
  disabled: {
    opacity: 0.5, // Mengurangi opacity tombol ketika disabled
    pointerEvents: "none", // Menonaktifkan interaksi tombol saat disabled
  },
};
//

const LabelCheckboxStyle = {
  display: "flex",
  alignItems: "center",
  marginBottom: "10px",
  fontSize: "14px",
  fontFamily: "Arial, sans-serif",
};

// Tambahkan efek hover pada tombol aktif
const hoverButtonStyle = {
  ":hover": {
    backgroundColor: "#218838",
    transform: "scale(1.02)",
  },
};

// Style buton kembali&lanjut
const buttonStyle1 = {
  backgroundColor: "#28a745",
  color: "white",
  border: "none",
  padding: "12px 20px", // Pastikan padding seragam
  height: "50px", // Tinggi seragam untuk semua tombol
  cursor: "pointer",
  borderRadius: "5px",
  transition: "all 0.3s ease-in-out",
  display: "inline-block",
  textAlign: "center", // Memberi jarak antar tombol jika diperlukan
};

const hoverButtonStyle1 = {
  ":hover": {
    backgroundColor: "#218838",
    transform: "scale(1.02)",
  },
};

const buttonContainerStyle1 = {
  display: "flex",
  justifyContent: "space-between", // Posisi tombol diatur secara horizontal
  marginTop: "20px",
};

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    alamat: "",
    domisili: "",
    telepon: "",
    teleponDarurat: "",
    pekerjaan: "",
    gunung: "",
    tanggal: "",
    paket: "",
    fasilitas: "",
    meetingPoint: "",
    keterangan: "",
    fotoKTP: null,
    setuju: false,
    kesehatan: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };

  const handleNext = () => {
    if (validateStep()) {
      setActiveStep(activeStep + 1);
    } else {
      alert("Mohon lengkapi semua data di langkah ini sebelum melanjutkan.");
    }
  };

  const handlePrevious = () => {
    setActiveStep(activeStep - 1);
  };

  const validateStep = () => {
    switch (activeStep) {
      case 1:
        return (
          formData.nama &&
          formData.email &&
          formData.alamat &&
          formData.domisili &&
          formData.telepon &&
          formData.teleponDarurat
        );
      case 2:
        return (
          formData.pekerjaan &&
          formData.gunung &&
          formData.tanggal &&
          formData.paket &&
          formData.fasilitas &&
          formData.meetingPoint &&
          formData.fotoKTP
        );
      case 3:
        return formData.setuju && formData.kesehatan;
      default:
        return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      alert("Formulir berhasil dikirim!");
      console.log(formData);
    } else {
      alert("Mohon lengkapi semua data sebelum mengirim.");
    }
  };

  return (
    <div style={containerStyle}>
      <div style={formWrapperStyle}>
        <div style={formStyle}>
          <img
            src={NewImage}
            alt="Logo"
            style={{
              width: "120px",
              marginBottom: "20px",
              borderRadius: "5%",
              border: "2px solid #28A745",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <h2
            style={{
              color: "#28A745",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            Formulir Pendaftaran Pendakian
          </h2>
          <form onSubmit={handleSubmit}>
            {activeStep === 1 && (
              <div>
                <h2>Langkah 1: Data Pribadi</h2>
                <input
                  type="text"
                  name="nama"
                  placeholder="Nama Lengkap"
                  style={inputStyle}
                  value={formData.nama}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  style={inputStyle}
                  value={formData.email}
                  onChange={handleChange}
                />
                <textarea
                  name="alamat"
                  placeholder="Alamat Lengkap"
                  style={textareaStyle}
                  value={formData.alamat}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="domisili"
                  placeholder="Domisili"
                  style={inputStyle}
                  value={formData.domisili}
                  onChange={handleChange}
                />
                <input
                  type="tel"
                  name="telepon"
                  placeholder="Nomor Telepon/WA"
                  style={inputStyle}
                  value={formData.telepon}
                  onChange={handleChange}
                />
                <input
                  type="tel"
                  name="teleponDarurat"
                  placeholder="Nomor Telepon Darurat"
                  style={inputStyle}
                  value={formData.teleponDarurat}
                  onChange={handleChange}
                />
              </div>
            )}

            {activeStep === 2 && (
              <div>
                <h2>Langkah 2: Informasi Pendakian</h2>
                <input
                  type="text"
                  name="pekerjaan"
                  placeholder="Pekerjaan"
                  style={inputStyle}
                  value={formData.pekerjaan}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="gunung"
                  placeholder="Gunung yang diambil"
                  style={inputStyle}
                  value={formData.gunung}
                  onChange={handleChange}
                />
                <input
                  type="date"
                  name="tanggal"
                  style={inputStyle}
                  value={formData.tanggal}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="paket"
                  placeholder="Paket yang diambil"
                  style={inputStyle}
                  value={formData.paket}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="fasilitas"
                  placeholder="Fasilitas yang diambil"
                  style={inputStyle}
                  value={formData.fasilitas}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="meetingPoint"
                  placeholder="Meeting Point"
                  style={inputStyle}
                  value={formData.meetingPoint}
                  onChange={handleChange}
                />
                <textarea
                  name="keterangan"
                  placeholder="Keterangan Lain"
                  style={inputStyle}
                  value={formData.keterangan}
                  onChange={handleChange}
                />
                <label htmlFor="fotoKTP">Foto KTP</label>
                <br></br>
                <input
                  type="file"
                  id="fotoKTP"
                  name="fotoKTP"
                  style={fileInputStyle}
                  onChange={handleChange}
                />
              </div>
            )}

            {activeStep === 3 && (
              <div>
                <h3>Informasi Kesehatan & Syarat Ketentuan</h3>

                <h5>INFORMASI KESEHATAN :</h5>
                <ul>
                  <li>Peserta dalam keadaan sehat jasmani dan rohani ✓</li>
                  <li>
                    Peserta tidak memiliki riwayat penyakit yang menular atau
                    berbahaya untuk diri sendiri dan orang lain ✓
                  </li>
                  <li>
                    Peserta tidak memiliki riwayat penyakit seperti jantung,
                    asma, stroke, dan riwayat berat lainnya ✓
                  </li>
                </ul>
                <h5>SYARAT</h5>
                <ul>
                  <li>
                    Usia minimal 17 tahun maksimal 60 tahun (usia di bawah 17
                    tahun wajib melampirkan surat perijinan orang tua).
                  </li>
                  <li>Minimal sudah pernah melakukan 1x pendakian.</li>
                  <li>
                    Jika pemula, maka tuliskan di pendaftaran bagian keterangan.
                  </li>
                  <li>
                    Peserta wajib mengikuti peraturan yang dibuat oleh IL'M Trip
                    Organizer.
                  </li>
                  <li>
                    Peserta wajib memiliki asuransi pribadi seperti BPJS
                    Kesehatan dan lain-lain.
                  </li>
                  <li>Peserta wajib melampirkan surat sehat.</li>
                  <li>Peserta wajib dalam keadaan sehat jasmani dan rohani.</li>
                  <li>
                    Peserta tidak memiliki riwayat penyakit yang menular atau
                    berbahaya untuk diri sendiri dan orang lain.
                  </li>
                  <li>
                    Peserta tidak memiliki riwayat penyakit seperti jantung,
                    asma, stroke, dan riwayat berat lainnya.
                  </li>
                  <li>
                    Peserta wajib konfirmasi sebelum melakukan pendaftaran atau
                    booking.
                  </li>
                  <li>
                    Peserta wajib melakukan pendaftaran atau booking jauh-jauh
                    hari.
                  </li>
                  <li>
                    Peserta wajib membayar Down Payment sebesar 50% saat
                    melakukan booking maksimal H-14 hari sebelum trip.
                  </li>
                </ul>
                <h5>KETENTUAN</h5>
                <ul>
                  <li>
                    Peserta yang sudah booking kemudian membatalkan trip atau
                    cancel, DP dianggap hangus.
                  </li>
                  <li>
                    Apabila ada kenaikan harga dari pihak transportasi atau yang
                    berkaitan dengan trip secara mendadak, maka harga akan
                    menyesuaikan dengan persetujuan antara kami dan calon
                    peserta (misalnya pada saat hari libur Lebaran, Natal, dan
                    Tahun Baru).
                  </li>
                  <li>
                    Pembayaran akan kami kembalikan 100% apabila ada pembatalan
                    dari pihak kami.
                  </li>
                  <li>
                    Peserta tidak bisa digantikan secara mendadak, maksimal
                    H-14.
                  </li>
                  <li>Pelunasan trip maksimal H-10 sebelum keberangkatan.</li>
                  <li>Peserta dilarang keras melakukan vandalisme.</li>
                  <li>
                    Peserta dilarang meninggalkan sampah di tempat wisata.
                  </li>
                  <li>
                    Peserta dilarang keras membawa tisu basah di kawasan
                    pendakian.
                  </li>
                  <li>
                    Peserta wajib menjaga barang-barang yang menjadi fasilitas
                    yang diberikan dan wajib mematuhi arahan yang diberikan
                    secara lisan oleh tour leader atau crew yang bertugas selama
                    kegiatan.
                  </li>
                  <li>
                    Peserta wajib dalam kondisi sehat jasmani dan rohani ketika
                    mengikuti kegiatan.
                  </li>
                  <li>
                    Peserta wajib mematuhi dan mengikuti aturan yang berlaku di
                    IL'M Trip Organizer dan taman nasional atau lokasi trip.
                  </li>
                  <li>
                    Peserta dilarang keras membawa obat-obatan terlarang dan
                    benda-benda yang membahayakan keselamatan diri sendiri
                    ataupun keselamatan orang lain seperti diatur dalam
                    undang-undang yang berlaku di Indonesia.
                  </li>
                  <li>
                    Sesama peserta harus saling membantu, kompak, dan menjaga
                    kebersamaan.
                  </li>
                  <li>
                    Apabila ada kejadian force majeure sehingga pendakian ini
                    tertunda atau batal, maka akan dilakukan musyawarah mufakat
                    (force majeure dalam perjanjian ini adalah suatu keadaan
                    memaksa di luar batas kemampuan kedua belah pihak yang dapat
                    mengganggu bahkan menggagalkan terlaksananya kegiatan,
                    seperti bencana alam, peperangan, pemogokan, sabotase,
                    pemberontakan masyarakat, blokade, kebijaksanaan pemerintah
                    khususnya yang disebabkan karena keadaan di luar kemampuan
                    manusia).
                  </li>
                </ul>
                <label style={LabelCheckboxStyle}>
                  <input
                    type="checkbox"
                    name="setuju"
                    style={CheckboxStyle}
                    checked={formData.setuju}
                    onChange={handleChange}
                  />
                  Saya menyetujui syarat dan ketentuan.
                </label>
                <label style={LabelCheckboxStyle}>
                  <input
                    type="checkbox"
                    name="kesehatan"
                    style={CheckboxStyle}
                    checked={formData.kesehatan}
                    onChange={handleChange}
                  />
                  Saya dalam kondisi sehat jasmani dan rohani.
                </label>
              </div>
            )}

            {activeStep === 4 && (
              <div>
                <h2>PERNYATAAN, PERSETUJUAN SANKSI DAN KETENTUAN</h2>
                <strong>NOTED:</strong>
                <ul>
                  <li>
                    Panitia atau pihak penyelenggara tidak bertanggung jawab dan
                    tidak bisa dituntut atas:
                  </li>
                  <ul>
                    <li>
                      Kerusakan, kehilangan, keterlambatan barang peserta oleh
                      maskapai penerbangan, kereta api, bus, angkutan umum
                      lainnya, dan hotel/penginapan.
                    </li>
                    <li>
                      Hilang atau rusaknya barang-barang pribadi milik peserta,
                      termasuk namun tidak terbatas pada dompet beserta isinya,
                      paspor, uang, perhiasan, kamera, handphone, dan lain-lain
                      dengan alasan apapun.
                    </li>
                    <li>
                      Perubahan atau pembatalan acara akibat dari bencana alam,
                      kerusuhan, cuaca buruk, atau suatu kondisi yang tidak
                      memungkinkan untuk melanjutkan acara.
                    </li>
                    <li>
                      <strong>Force Majeure:</strong> Meninggalnya seorang
                      peserta akibat penyakit yang diderita, kecelakaan, atau
                      kelalaian.
                    </li>
                    <li>
                      Segala risiko bahaya yang terjadi, baik diakibatkan oleh
                      diri sendiri maupun dari alam dan sekitarnya, menjadi
                      tanggung jawab masing-masing peserta.
                    </li>
                  </ul>
                  <strong>SANKSI DAN KETENTUAN:</strong>
                  <ul>
                    <li>
                      Penyelenggara berhak menegur peserta jika diketahui
                      melanggar aturan dan norma.
                    </li>
                    <li>
                      Panitia berhak mengeluarkan dan memulangkan peserta dari
                      rombongan jika dirasa mengganggu keamanan dan kenyamanan
                      crew kami ataupun peserta lain.
                    </li>
                    <li>
                      Panitia berhak membawa peserta ke pihak yang berwajib jika
                      diketahui membawa obat-obatan terlarang, narkotika, atau
                      benda-benda terlarang lainnya.
                    </li>
                    <li>
                      Apabila peserta menghilangkan atau merusak alat dan
                      fasilitas yang diberikan, peserta wajib mengganti sesuai
                      nominal harga alat tersebut.
                    </li>
                  </ul>
                </ul>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "15px",
                  }}
                >
                  <input
                    type="checkbox"
                    name="setujuKetentuan"
                    style={{ marginRight: "10px" }}
                    checked={formData.setujuKetentuan || false}
                    onChange={handleChange}
                  />
                  Saya setuju dengan SANKSI DAN SEMUA KETENTUAN.
                </label>
                <div style={buttonContainerStyle}>
                  <button
                    type="submit"
                    disabled={!formData.setujuKetentuan}
                    style={{
                      ...submitButtonStyle,
                      ...(formData.setujuKetentuan
                        ? {}
                        : submitButtonStyle.disabled),
                      ...hoverButtonStyle[":hover"],
                    }}
                  >
                    Kirim Pendaftaran
                  </button>
                </div>
              </div>
            )}

            <div style={buttonContainerStyle1}>
              {activeStep > 1 && (
                <button
                  type="button"
                  onClick={handlePrevious}
                  style={{
                    ...buttonStyle1,
                    ...hoverButtonStyle1[":hover"],
                  }}
                >
                  Kembali
                </button>
              )}
              {activeStep < 4 && (
                <button
                  type="button"
                  onClick={handleNext}
                  style={{
                    ...buttonStyle1,
                    ...hoverButtonStyle1[":hover"],
                  }}
                >
                  Lanjut
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
