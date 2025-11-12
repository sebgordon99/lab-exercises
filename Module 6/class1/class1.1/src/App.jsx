import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Footer } from "./Footer";
import { Greeting } from "./Lab1";
import { Comment } from "./userInfo";
import MoviesList from "./movieList";
import BigCats from "./BigCats(lab2)";
import { Emoji } from "./emoji(lab3)";
import { ReverseMovies } from "./reversemovies";
import BigCatsSort from "./sortCats(lab4)";

const Title2 = () => {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
    </>
  );
};

function App() {
  const [count, setCount] = useState(0);

  const title = <h1>Hello</h1>;

  return (
    <>
      {/* <BigCats /> */}
      <BigCatsSort />
      <Comment
        author={{
          name: "Seb",
          avatarUrl:
            "https://imgs.search.brave.com/h3xhovhzP5ppc51NNq--2CkNBmvR7d24eUY14dE-72w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cGhvdG9zLWdyYXR1/aXRlL2F2YXRhci1h/bmRyb2d5bmUtcGVy/c29ubmUtcXVlZXIt/bm9uLWJpbmFpcmVf/MjMtMjE1MTEwMDIw/NS5qcGc_c2VtdD1h/aXNfaHlicmlkJnc9/NzQwJnE9ODA",
        }}
        text="here is some text"
        date="10/11/2025"
      />
      <Greeting name="planet">
        <div>hey</div>
        <span>blah</span>
      </Greeting>
      {/* <h1>{title}</h1> */}
      {/* <MoviesList/> */}
      <ReverseMovies />
      <Emoji />
      <Title2 />
      <div
        className="card"
        style={{
          backgroundColor: "red",
        }}
      >
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer footer="end of the app" footClassName={"footerClass"} />
    </>
  );
}

export default App;
