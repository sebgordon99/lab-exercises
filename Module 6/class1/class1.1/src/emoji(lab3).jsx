import { useState } from "react";

export function Emoji() {
  const emojis = ["😃", "😍"];

  const [emoji, setEmoji] = useState("😃");
  const handler = () => {
    if (emoji === "😃") {
      setEmoji("😍");
    } else {
      setEmoji("😃");
    }
    // if current index is 0
    // select 1
    // else select 0
  };

  return (
    <div>
      <div className="emoji">{emoji}</div>
      <button onClick={handler}>click to change</button>
    </div>
  );
}

//😍😃
