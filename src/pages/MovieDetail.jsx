import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?i=${id}&apikey=b3978b6a`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the movie details!", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="loader">
    <div className="load"></div>
  </div>;
  if (!movie) return <div className='loader'>No movie data found!</div>;

  return (
    <div className="movie-detail">

<div className="detail-box">
<h1>{movie.Title}</h1>
<p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Rating:</strong> {movie.imdbRating}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Director:</strong> {movie.Director}</p>
      <p><strong>Actors:</strong> {movie.Actors}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>Runtime:</strong> {movie.Runtime}</p>
      <p><strong>Language:</strong> {movie.Language}</p>
      <p><strong>Country:</strong> {movie.Country}</p>
      <p><strong>Awards:</strong> {movie.Awards}</p>
</div>
    <div className="img-box">
    <img src={movie.Poster} alt={movie.Title} />
    </div>
    </div>
  );
};

export default MovieDetail;
