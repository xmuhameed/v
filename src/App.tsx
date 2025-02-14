"use client";
import { useState } from "react";
import successSound from "./assets/success.mp3";
import failSound from "./assets/error-1.mp3";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const playSound = (src: string, onended?: () => void) => {
    const sound = new Audio(src);
    sound.play();
    sound.onended = onended || (() => {});
  };

  const handleNoClick = () => {
    playSound(failSound);
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "With a Pancake Nutella on top?",
      "What about a Watermelon juice",
      "PLEASE DAHDOHTY",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to mohamed's ghost",
      "please babe",
      ":((((",
      "PRETTY PLEASE",
      "I will cry",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">WOOOOOO!!! I love you Dohaaaaa!! ;))</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => {
                setYesPressed(true)
                playSound(successSound);
              }}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
