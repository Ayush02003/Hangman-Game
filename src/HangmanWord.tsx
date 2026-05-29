
type HangmanWordProps = {
  guessedLetters: string[];
  revealedLetters: string[];
  wordToGuess: string;
  reveal: boolean;
};
export function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
  revealedLetters,
}: HangmanWordProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: ".353em",
        padding: "30px 0px",
        fontSize: "3rem",
        fontWeight: "700",
        textTransform: "uppercase",
        fontFamily: "Inter, sans-serif",
        // color: "#0f172a",
        color: " #222",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <span
          style={{
            borderBottom: "4px solid #5f6670",
            minWidth: "60px",
            display: "flex",
            justifyContent: "center",
            color: "#222",
            borderRadius: "4px",
            boxShadow: "0 4px 12px rgba(148,163,184,0.6)",
            paddingBottom: ".1em",
          }}
          key={index}
        >
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) ||
                revealedLetters.includes(letter) ||
                reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && reveal && !revealedLetters.includes(letter) ? "#a12929" : "grey",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
