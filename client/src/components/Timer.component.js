import React, { useEffect, useState } from "react";

function Timer(props) {
  const [allsecs, setAllsecs] = useState(
    parseInt(props.mins) * 60 + parseInt(props.secs)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setAllsecs((prevSecs) => {
        if (prevSecs <= 1) {
          clearInterval(interval);
          props.submithandler();
          return 0;
        }
        return prevSecs - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const displayMins = String(Math.floor(allsecs / 60)).padStart(2, '0');
  const displaySecs = String(allsecs % 60).padStart(2, '0');

  return (
    <div
      style={{
        justifyContent: "space-around",
        display: "flex",
        flexDirection: "row",
        width: "100%",
      }}
    >
      <div
        style={{
          background: "rgb(26, 26, 26, 0.5)",
          color: "white",
          padding: "2% 2% 2% 2%",
          borderRadius: "8px",
        }}
      >
        <h1 style={{ fontSize: "2.5em" }}>{displayMins}</h1>
      </div>
      <div
        style={{
          background: "rgb(26, 26, 26, 0.5)",
          color: "white",
          padding: "2% 2% 2% 2%",
          borderRadius: "8px",
        }}
      >
        <h1 style={{ fontSize: "2.5em" }}>:</h1>
      </div>
      <div
        style={{
          background: "rgb(26, 26, 26, 0.5)",
          color: "white",
          padding: "2% 2% 2% 2%",
          borderRadius: "8px",
        }}
      >
        <h1 style={{ fontSize: "2.5em" }}>{displaySecs}</h1>
      </div>
    </div>
  );
}

export default Timer;
