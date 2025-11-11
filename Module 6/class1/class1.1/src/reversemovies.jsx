import { useState } from "react";
import MoviesList from "./movieList";


export function ReverseMovies() {
const [currentMovies, setCurrentMovies] = useState({MoviesList});
const movieItems = currentMovies.map(movie => (
<MoviesList 
key={movie.title}
title={movie.title}
year={movie.year} 
synopsis={movie.synopsis}/>
))
const handleReverseMovies = () => {
// first clone the original, so we don’t mutate it
let newMovies = [...currentMovies];
newMovies.reverse(); // 2. modify the clone
setCurrentMovies(newMovies); // 3. set updated clone in state
}
return (
<div className="MoviesList">
<ul>
{ movieItems }
</ul>
<button onClick={handleReverseMovies}>Reverse List</button>
</div>
)
}