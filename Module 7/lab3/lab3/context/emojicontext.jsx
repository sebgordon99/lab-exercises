import { useState, createContext } from "react";

export const EmojiContext = createContext();

export function EmojiProvider({children}) {

const [emoji, setEmoji] = useState("😃");

const changeEmoji = () => {
setEmoji((prev) => (prev === "😃" ? "😍" : "😃"));
};

return (
<EmojiContext.Provider value={{emoji, changeEmoji}}>
{children}
</EmojiContext.Provider>
);
}
