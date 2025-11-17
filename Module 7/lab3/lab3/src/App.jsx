import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { UserProvider } from "./context/UserContext";
import { ClockDisplay, MoviesList, LoginForm } from "./ClockDisplay";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserProvider>
        {" "}
        {/* provider component is at top level */}
        <ClockDisplay /> {/* so all children can use context data */}
        <MoviesList /> {/* even if they have children of their own */}
        <LoginForm />
      </UserProvider>
    </>
  );
}

export default App;
