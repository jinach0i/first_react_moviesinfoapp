import Movies from './Movies';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year')).json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(() => {
    getMovies()
  }, []);
  return (
    <div className="App">
      <div id='container'>
        {loading?
          <h1>로딩중...</h1>:
          <div className="movies">
            {movies.map((movie) => 
              <Movies key={movie.id} smallCoverIimage={movie.small_cover_image} mediumCoverIimage={movie.medium_cover_image} title={movie.title} genres={movie.genres} summary={movie.summary}/>
            )}
          </div>
        }
      </div>
    </div>
  );
}

Movies.PropTypes={
  smallCoverIimage:PropTypes.string.isRequired,
  mediumCoverIimage:PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  genres:PropTypes.arrayOf(PropTypes.string).isRequired,
  summary:PropTypes.string.isRequired
}
export default App;
