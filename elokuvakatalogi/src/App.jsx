import { useState } from 'react'
import Elokuvat from "./elokuvalista";
import ElokuvaLomake from "./lomake";
import Haku from "./haku";

function App() {
  const [movies, setMovies] = useState(Elokuvat);
  const [search, setSearch] = useState("");

  function handleSubmit(movie) {
    setMovies((oldMovies) => [...oldMovies, movie]);
  }

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <ElokuvaLomake onSubmit={handleSubmit} />

      <Haku search={search} setSearch={setSearch} />

      <ul>
        {filteredMovies.map((item, index) => (
          <li key={index}>
            {item.title} - {item.year} - {item.genre}
            <button
              onClick={() =>
                setMovies(movies.filter((movie) => movie !== item))
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App