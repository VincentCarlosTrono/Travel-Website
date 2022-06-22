import React, { useContext } from "react";
import "./App.css";
import HomePage from "./Containers/HomePage";
import Header from "./Components/Header";
import Discover from "./Containers/Discover";
import Places from "./Containers/Places";
import About from "./Containers/About";
import Footer from "./Components/Footer";
import { ThemeContext } from "./ContextAPI/ThemeContext";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const { isDarkmode } = useContext(ThemeContext);

  const location = useLocation();
  const HomepagePath = location.pathname === "/";

  return (
    <div className={isDarkmode ? "dark" : "App"}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/place" element={<Places />} />
      </Routes>

      {!HomepagePath && <Footer />}
    </div>
  );
}

export default App;
