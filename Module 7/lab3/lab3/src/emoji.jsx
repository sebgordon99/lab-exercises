import { useContext } from "react";
import { EmojiContext } from "../context/emojicontext";

export function Emoji() {

  const {emoji, changeEmoji} = useContext(EmojiContext);


  return (
    <div>
      <div className="emoji">{emoji}</div>
      <button onClick={changeEmoji}>click to change</button>
    </div>
  );
}

//😍😃
