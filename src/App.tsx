import React from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomePage from "./Containers/HomePage";
import { Routes, Route } from "react-router-dom";
import Discover from "./Components/Discover";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/discover" element={<Discover />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
