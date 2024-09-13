import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Series from "./pages/Series";
import Movies from "./pages/Movies";
import SearchResults from "./pages/SearchResults";  // Corrected import
import "./App.css";
import MovieDetail from "./pages/MovieDetail";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/series" element={<Series />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/search/:query" element={<SearchResults />} /> 
        <Route path="/movie/:id" element={<MovieDetail/>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
