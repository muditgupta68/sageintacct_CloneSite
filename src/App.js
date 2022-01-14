import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Next from "./components/Next";

function App() {
  const [up, setUp] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setUp(true);
      } else {
        setUp(false);
      }
    });
  }, []);
  const topTo = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/next" element={<Next />} />
        </Routes>
        <Footer />
        <button className={`top ${up && "visible"}`}>
          <KeyboardDoubleArrowUpIcon onClick={topTo} />
        </button>
      </Router>
    </div>
  );
}

export default App;
