import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const SearchResults = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const { query } = useParams();
  const navigate = useNavigate(); // Add this line to use navigate

  useEffect(() => {
    if (query) {
      setLoading(true);  // Set loading to true before starting the fetch
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
          console.error("There was an error fetching the movie data!", error);
        })
        .finally(() => {
          setLoading(false);  // Set loading to false once fetch is complete
        });
    }
  }, [query]);

  const handleCardClick = (id) => {
    navigate(`/movie/${id}`); // Navigate to movie detail page
  };

  return (
    <div className="search-results">
      <h4>Search Results for "{query}"</h4>
      {loading ? (
        <div className="loader"><div className="load"></div></div>  // Loader
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
            <p>No results found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
