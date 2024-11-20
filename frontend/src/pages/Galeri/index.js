import React from "react";

// Data Cerita
const stories = [
  {
    title: "Judul Cerita 1",
    description: "Keterangan singkat tentang cerita pertama ini.",
    date: "20 November 2024",
    location: "Desa Ranca Kalong",
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    title: "Judul Cerita 2",
    description: "Keterangan singkat tentang cerita kedua ini.",
    date: "21 November 2024",
    location: "Desa Ranca Kalong",
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    title: "Judul Cerita 3",
    description: "Keterangan singkat tentang cerita ketiga ini.",
    date: "22 November 2024",
    location: "Desa Ranca Kalong",
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    title: "Judul Cerita 4",
    description: "Keterangan singkat tentang cerita keempat ini.",
    date: "23 November 2024",
    location: "Desa Ranca Kalong",
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    title: "Judul Cerita 5",
    description: "Keterangan singkat tentang cerita kelima ini.",
    date: "24 November 2024",
    location: "Desa Ranca Kalong",
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

// Komponen Cerita
const Story = ({ title, description, date, location, videoSrc, reverse }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "20px",
        marginBottom: "40px",
        flexDirection: reverse ? "row-reverse" : "row",
      }}
    >
      {/* Video Section */}
      <div style={{ flex: "1 1 45%", textAlign: "center" }}>
        <video
          controls
          style={{
            width: "100%",
            maxWidth: "500px",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      {/* Text Section */}
      <div style={{ flex: "1 1 45%", textAlign: "left" }}>
        <h2
          style={{
            color: "#164F4C",
            fontSize: "30px",
            fontWeight: "700",
            fontFamily: "Poppins",
            marginBottom: "10px",
          }}
        >
          {title}
        </h2>
        <p
          style={{
            color: "#164F4C",
            fontSize: "16px",
            fontWeight: "400",
            fontFamily: "Poppins",
            lineHeight: "1.5",
            marginBottom: "20px",
          }}
        >
          {description}
        </p>
        <div
          style={{
            color: "#164F4C",
            fontSize: "20px",
            fontFamily: "Poppins",
            lineHeight: "1.5",
          }}
        >
          <p>
            <strong>Waktu:</strong> {date}
          </p>
          <p>
            <strong>Tempat:</strong> {location}
          </p>
        </div>
      </div>
    </div>
  );
};

// Komponen Utama
const StorySection = () => {
  return (
    <section
      style={{
        padding: "50px 20px",
        textAlign: "center",
        background: "#f7f4e7",
        color: "#f8ab00",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <p
          style={{
            color: "#164F4C",
            fontSize: "36px",
            fontWeight: "700",
            fontFamily: "Poppins",
          }}
        >
          Temukan
        </p>
        <h2
          style={{
            color: "#164F4C",
            fontSize: "36px",
            fontWeight: "700",
            fontFamily: "Poppins",
            marginBottom: "50px",
            paddingBottom: "50px",
            borderBottom: "3px solid #f8ab00",
          }}
        >
          cerita seru lainnya dari kami yang tak kalah menarik
        </h2>
      </div>

      {stories.map((story, index) => (
        <Story
          key={index}
          {...story}
          reverse={index % 2 !== 0} // Balikkan urutan untuk elemen ganjil
        />
      ))}

      <hr style={{ border: "3px solid #f8ab00", margin: "20px 0" }} />
    </section>
  );
};

export default StorySection;
