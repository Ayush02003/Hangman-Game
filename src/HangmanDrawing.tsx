const HEAD = (
  <div
    style={{
      width: "35px",
      height: "35px",
      borderRadius: "50%",
      border: "5px solid #334155",
      background: "linear-gradient(to bottom right, #eff6ff, #f8fafc)",
      position: "absolute",

      top: "40px",
      right: "-20px",
      boxShadow: "0 4px 12px rgba(51,65,85,0.25)",
    }}
  ></div>
);

const BODY = (
  <div
    style={{
      width: "5px",
      boxShadow: "0 4px 12px rgba(51,65,85,0.25)",
      height: "80px",
      background: "#334155",
      position: "absolute",
      top: "80px",
      right: "0px",
      borderRadius: "999px",
    }}
  ></div>
);

const RIGHT_ARM = (
  <div
    style={{
      width: "65px",
      boxShadow: "0 4px 12px rgba(51,65,85,0.25)",
      height: "5px",
      background: "#334155",
      position: "absolute",
      top: "105px",
      right: "-65px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
      borderRadius: "999px",
    }}
  ></div>
);

const LEFT_ARM = (
  <div
    style={{
      width: "65px",
      height: "5px",
      boxShadow: "0 4px 12px rgba(51,65,85,0.25)",
      background: "#334155",
      position: "absolute",
      top: "105px",
      right: "5px",
      rotate: "30deg",
      transformOrigin: "right bottom",
      borderRadius: "999px",
    }}
  ></div>
);

const RIGHT_LEG = (
  <div
    style={{
      width: "65px",
      boxShadow: "0 4px 12px rgba(51,65,85,0.25)",
      height: "5px",
      background: "#334155",
      position: "absolute",
      top: "150px",
      right: "-58px",
      rotate: "60deg",
      transformOrigin: "left bottom",
      borderRadius: "999px",
    }}
  ></div>
);

const LEFT_LEG = (
  <div
    style={{
      width: "65px",
      boxShadow: "0 4px 12px rgba(51,65,85,0.25)",
      height: "5px",
      background: "#334155",
      position: "absolute",
      top: "150px",
      right: "0px",
      rotate: "-60deg",
      transformOrigin: "right bottom",
      borderRadius: "999px",
    }}
  ></div>
);

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

const BODY_PARTS = [
  HEAD,
  BODY,
  RIGHT_ARM,
  LEFT_ARM,
  RIGHT_LEG,
  LEFT_LEG,
];

export function HangmanDrawing({
  numberOfGuesses,
}: HangmanDrawingProps) {
  return (
    <div
      style={{
        position: "relative",
        width: "200px",
        height: "280px",
      }}
    >
      {BODY_PARTS.slice(0, numberOfGuesses)}

      <div
        style={{
          height: "40px",
          width: "5px",
          background: "#334155",
          top: 0,
          right: 0,
          position: "absolute",
          borderRadius: "999px",
          boxShadow: "0 4px 12px rgba(51,65,85,0.25)",
        }}
      ></div>

      <div
        style={{
          height: "5px",
          width: "140px",
          background: "#334155",
          marginLeft: "60px",
          boxShadow: "0 4px 12px rgba(51,65,85,0.25)",
          borderRadius: "999px",
        }}
      ></div>

      <div
        style={{
          height: "240px",
          width: "5px",
          background: "#334155",
          marginLeft: "60px",
          borderRadius: "999px",
        }}
      ></div>

      <div
        style={{
          height: "5px",
          width: "180px",
          background: "#334155",
          borderRadius: "999px",
        }}
      ></div>
    </div>
  );
}