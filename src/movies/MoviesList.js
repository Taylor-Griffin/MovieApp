import { useState, useEffect } from 'react';
import { Movie } from './Movie';
import { Filter } from '../Filter';

const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

const CONFIG_URL = `https://api.themoviedb.org/3/configuration?api_key=${process.env.REACT_APP_MOVIE_API}`;

export function MoviesList() {
  const [filter, setFilter] = useState('');
  const [movies, setMovies] = useState([]);
  const [config, setConfig] = useState({});
  const getMovies = async () => {
    try {
      const res = await fetch(API_URL);
      const movies = await res.json();
      setMovies(movies.results);
    } catch (e) {
      console.error(e);
    }
  };
  const getConfig = async () => {
    try {
      const res = await fetch(CONFIG_URL);
      const config = await res.json();
      setConfig(config);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getMovies();
    getConfig();
  }, []);

  return (
    <div>
      <Filter filter={filter} setFilter={setFilter} />
      <ul className="movies-list">
        {movies
          .filter((movie) =>
            movie.title.toLowerCase().includes(filter.toLowerCase())
          )
          .map((movie) => (
            <Movie key={movie.id} config={config} movie={movie} />
          ))}
      </ul>
    </div>
  );
}
