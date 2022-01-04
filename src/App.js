import { Routes, Route } from 'react-router-dom';
import './App.css';

import { MoviesList } from './movies/MoviesList';
import { MovieDetail } from './movies/MovieDetail';

function App() {
  return (
    <div className="App">
      <h1>Latest Movies</h1>
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
