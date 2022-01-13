import "./App.css";
import Banner from "./components/Banner";
import Features from "./components/Features";
import Feature_card from "./components/Feature_card";
import Footer from "./components/Footer";
// import { Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Partner from "./components/Partner";
import Section2 from "./components/Section2";
import Trusted from "./components/Trusted";
function App() {
  return (
    <div>
      <Header />
      <Navbar />

      <Banner />
      <Feature_card />
      <Features />
      <Section2 />
      <Trusted />
      <Partner />

      <Footer />
    </div>
  );
}

export default App;
