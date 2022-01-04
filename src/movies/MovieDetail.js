import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = `?api_key=${process.env.REACT_APP_MOVIE_API}`;
const IMAGE_URL = 'https://image.tmdb.org/t/p/';
const BACKDROP_SIZE = 'original';
const POSTER_SIZE = 'w342';

export function MovieDetail() {
  const [movie, setMovie] = useState({});

  const { id } = useParams();
  const getMovie = async () => {
    try {
      const res = await fetch(BASE_URL + id + API_KEY);
      const newMovie = await res.json();
      setMovie(newMovie);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getMovie();
  });

  if (!movie.title) return null;
  return (
    <div>
      <img
        className="backdrop"
        src={IMAGE_URL + BACKDROP_SIZE + movie.backdrop_path}
        alt={movie.title + ' Backdrop'}
      />
      <div class="detail-details">
        <img
          className="detail-poster"
          src={IMAGE_URL + POSTER_SIZE + movie.poster_path}
          alt={movie.title + ' Poster'}
        />
        <div>
          <Link to="/">BACK</Link>

          <h1> {movie.title}</h1>
          <p>{movie.overview}</p>
          <ul>
            {movie.genres.map((genre) => {
              return <li key={genre.id}>{genre.name}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
