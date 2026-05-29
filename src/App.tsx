import { useCallback, useEffect, useState } from "react";
import words from "../wordList.json";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";

function App() {
  const [wordToGuess] = useState(() => {
    // return "laeG"
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter),
  );
  const [revealedLetters] = useState(() => {
  const randomLetter =
    wordToGuess[
      Math.floor(Math.random() * wordToGuess.length)
    ]

  return [randomLetter]
})
  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter) || revealedLetters.includes(letter));
  const addGuessedLetter = useCallback(
    (letter: string) => {
      setGuessedLetters((currentLetters) => {
        if (currentLetters.includes(letter) || isLoser || isWinner) {
          return currentLetters;
        }

        return [...currentLetters, letter];
      });
    },
    [guessedLetters, isLoser, isWinner],
  );
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);
  return (
    <div
      style={{
        maxWidth: "900px",
        display: "flex",
        flexDirection: "column",
        gap: "0rem",
        margin: "0 auto",
        alignItems: "center",
        padding: "0rem",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          margin: 0,
          fontSize: "4rem",
          fontWeight: "900",
          letterSpacing: ".08em",
          textTransform: "uppercase",

          background: "linear-gradient(135deg, #334155, #64748b)",

          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",

          textShadow: "0 10px 30px rgba(51,65,85,0.18)",
        }}
      >
        Hangman
      </h1>
      <div
        style={{
          fontSize: "2.5rem",
          textAlign: "center",
          fontWeight: "700",
          minHeight: "3rem",
          padding:"10px",
          color: isWinner ? "#267442" : isLoser ? "#a12929" : "#111827",
        }}
      >
        {isWinner && "🎉 You Won"}
        {isLoser && "💀 Game Over"}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord
        reveal={isLoser}
        guessedLetters={guessedLetters}
        revealedLetters={revealedLetters}
        wordToGuess={wordToGuess}
      />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetters={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter),
          )}
          revealedLetters={revealedLetters}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}

export default App;
