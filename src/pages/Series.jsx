import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Series = () => {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://www.omdbapi.com/?s=series&apikey=b3978b6a') // Searching for popular web series
      .then((response) => {
        if (response.data.Search) {
          setSeries(response.data.Search);
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the series web series!", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleCardClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className='series'>
      <h4>Web Series</h4>
      {loading ? (
        <div className="loader"><div className="load"></div></div>
      ) : (
        <div className="cards">
          {series.map((item, index) => (
            <div className="card" key={index} onClick={() => handleCardClick(item.imdbID)}>
              <img src={item.Poster} alt={item.Title} />
              <h2>{item.Title}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Series;
