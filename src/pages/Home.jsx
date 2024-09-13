import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Movies from "./Movies";
import Series from "./Series";

const Home = () => {
  const [avengersMovies, setAvengersMovies] = useState([]);
  const [starWarsMovies, setStarWarsMovies] = useState([]);
  const [loadingAvengers, setLoadingAvengers] = useState(true);
  const [loadingStarWars, setLoadingStarWars] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovies("Avengers", setAvengersMovies, setLoadingAvengers);
    fetchMovies("Star Wars", setStarWarsMovies, setLoadingStarWars);
  }, []);

  const fetchMovies = (query, setMovies, setLoading) => {
    axios
      .get(`http://www.omdbapi.com/?s=${query}&apikey=b3978b6a`)
      .then((response) => {
        if (response.data.Search) {
          setMovies(response.data.Search);
        } else {
          setMovies([]); // Clear movies if no results
        }
      })
      .catch((error) => {
        console.error(`There was an error fetching the ${query} movies!`, error);
        setMovies([]); // Clear movies if there is an error
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleCardClick = (id) => {
    navigate(`/movie/${id}`);
  };

  const renderMovies = (movies, loading) => (
    loading ? (
      <div className="loader"><div className="load"></div></div>
    ) : (
      <div className="cards">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.imdbID} className="card" onClick={() => handleCardClick(movie.imdbID)}>
              <img src={movie.Poster} alt={movie.Title} />
              <h2>{movie.Title}</h2>
            </div>
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    )
  );

  return (
    <>
      <div className="home">
        <div className="movie-category">
          <h4>Avengers Movies</h4>
          {renderMovies(avengersMovies, loadingAvengers)}
        </div>
        <br />
        <br />
        <div className="movie-category">
          <h4>Star Wars Movies</h4>
          {renderMovies(starWarsMovies, loadingStarWars)}
        </div>
      </div>
      <Movies />
      <Series />
    </>
  );
};

export default Home;
