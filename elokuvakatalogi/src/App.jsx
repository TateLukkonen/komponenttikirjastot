import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { UserProvider } from "./UserContext";
import NameButton from "./NameSwap";
import Elokuvat from "./Elokuvalista";
import ElokuvaLomake from "./Lomake";
import Haku from "./Haku";
import ThemeButton from "./ThemeSwap";

import "./App.css";

function App() {
  const [movies, setMovies] = useState(Elokuvat);
  const [search, setSearch] = useState("");

  function handleSubmit(movie) {
    setMovies((oldMovies) => [...oldMovies, movie]);
  }

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase()),
  );

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <body className={`app ${theme}`}>
        <UserProvider>
          <NameButton />
        </UserProvider>

        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <div>
            <ThemeButton />
          </div>
        </ThemeContext.Provider>
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
      </body>
    </>
  );
}

export default App;
