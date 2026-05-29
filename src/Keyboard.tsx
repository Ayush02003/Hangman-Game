import styles from "./Keyboard.module.css";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
type KeyboardProps = {
  disabled: boolean;
  activeLetters: string[];
  revealedLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};
export function Keyboard({
  activeLetters,
  inactiveLetters,
  disabled = false,
  revealedLetters,
  addGuessedLetter,
}: KeyboardProps) {
  return (
    <div
      style={{
        width: "100%",
        display: "grid",
        marginTop:"20px",
        marginBottom:"30px",
        gridTemplateColumns: "repeat(auto-fit,minmax(65px,1fr))",
        gap: "1.3rem",
      }}
    >
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key) || revealedLetters.includes(key);
        const isInActive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${styles.btn} ${isActive ? styles.active : ""} ${
              isInActive ? styles.inactive : ""
            }`}
            disabled={isActive || isInActive || disabled}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
