import React, { useState } from 'react';
import './App.css';

function DirectorMoviesTable() {
  const [directors, setDirectors] = useState([]);
  const [movies, setMovies] = useState([]);
  const [directorName, setDirectorName] = useState('');
  const [movieName, setMovieName] = useState('');

  const handleAdd = () => {
    if (directorName && movieName) {
      setDirectors([...directors, directorName]);
      setMovies([...movies, movieName]);
      setDirectorName('');
      setMovieName('');
    }
  };

  const handleRemove = (index) => {
    const updatedDirectors = [...directors];
    updatedDirectors.splice(index, 1);
    const updatedMovies = [...movies];
    updatedMovies.splice(index, 1);
    setDirectors(updatedDirectors);
    setMovies(updatedMovies);
  };
  
  return (
    <div className="App">
      <h1 style={{ color: 'black' }}>Director and Movies</h1>
      <div>
        <label htmlFor="directorName">Director Name:</label>
        <input
          type="text"
          id="directorName"
          value={directorName}
          onChange={(e) => setDirectorName(e.target.value)}
        />
        <label htmlFor="movieName">Movie Name:</label>
        <input
          type="text"
          id="movieName"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
        />
        <button style={{ backgroundColor: 'green', color: 'white' }} onClick={handleAdd}>
          Add
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Director</th>
            <th>Movie</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {directors.map((director, index) => (
            <tr key={index}>
              <td>{director}</td>
              <td>{movies[index]}</td>
              <td>
                <button style={{ backgroundColor: 'red', color: 'white' }} onClick={() => handleRemove(index)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default DirectorMoviesTable;