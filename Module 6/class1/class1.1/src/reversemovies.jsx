import { useState } from "react";

const movies = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    synopsis: "Two imprisoned men find redemption.",
  },
  {
    title: "The Dark Knight",
    year: 2008,
    synopsis: "Batman fights the menace known as the Joker.",
  },
  {
    title: "Interstellar",
    year: 2014,
    synopsis: "Explorers travel through a wormhole in space.",
  },
];

export function ReverseMovies() {
  const [currentMovies, setCurrentMovies] = useState(movies);
  const movieItems = currentMovies.map((movie) => (
    // <NewMovies
    //   key={movie.title}
    //   title={movie.title}
    //   year={movie.year}
    //   synopsis={movie.synopsis}
    // />
    <li key={movie.title}>
      <div>{movie.title}</div>
      <div>{movie.year}</div>
      <div>{movie.synopsis}</div>
    </li>
  ));

  const handleReverseMovies = () => {
    // first clone the original, so we don’t mutate it
    let newMovies = [...currentMovies];
    newMovies.reverse(); // 2. modify the clone
    setCurrentMovies(newMovies); // 3. set updated clone in state
  };

  const sortMovies = () => {
    let sortedMovies = [...currentMovies];
    sortedMovies.sort((a, b) => a.title - b.title);
    //use localecompare instead
    console.log(sortedMovies);
    setCurrentMovies(sortedMovies);
  };
  return (
    <div className="ReversemoviesList">
      <ul>{movieItems}</ul>
      <button onClick={handleReverseMovies}>Reverse List</button>
      <button onClick={sortMovies}>Sort List By Title</button>
    </div>
  );
}
