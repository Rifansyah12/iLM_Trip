import React from "react";
import Header from "./components/Header/index";
import Navbar from "./components/Navbar";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <main></main>
    </div>
  );
};
export default App;
