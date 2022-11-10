import React from 'react';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

export default function Profile({ }: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, My name is Julio Gagliardi",
      "A gamer and PC's enthusiast",
      "{ Love write code! }",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
  <div className="h-screen flex flex-col space-y-8 items-center justify-center
  text-center overflow-hidden">
    <BackgroundCircles />
    <h1>
      <span>{text}</span>
      <Cursor cursorColor="orange" />
    </h1>
  </div>
  );
}
