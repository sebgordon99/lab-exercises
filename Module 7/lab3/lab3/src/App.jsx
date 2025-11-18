import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import { UserProvider } from "./context/UserContext";
// import { ClockDisplay, MoviesList, LoginForm } from "./ClockDisplay";
import { BitcoinRates } from "./bitcoinrates";
import { Emoji } from "./emoji";
import { EmojiProvider } from "../context/emojicontext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <EmojiProvider>
      <BitcoinRates />
      <Emoji />
      </EmojiProvider>
    </>
  );
}

export default App;
