import React, { useContext } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomePage from "./Containers/HomePage";
import { Routes, Route, useLocation } from "react-router-dom";
import Discover from "./Containers/Discover";
import About from "./Containers/About";
import Places from "./Containers/Places";
import { ThemeContext } from "./ContextAPI/ThemeContext";

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
