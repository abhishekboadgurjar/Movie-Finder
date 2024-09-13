import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://www.omdbapi.com/?s=2024&apikey=b3978b6a") // Searching for movies released in 2024
      .then((response) => {
        if (response.data.Search) {
          setMovies(response.data.Search);
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the movie data!", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleCardClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className="movies">
      <h4>Movies</h4>
      {loading ? (
        <div className="loader"><div className="load"></div></div>
      ) : (
        <div className="cards">
          {movies.map((movie) => (
            <div 
              className="card" 
              key={movie.imdbID} 
              onClick={() => handleCardClick(movie.imdbID)}
            >
              <img src={movie.Poster} alt={movie.Title} />
              <h2>{movie.Title}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Movies;
