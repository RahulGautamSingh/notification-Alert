import { useState } from "react";

export default function App() {
  let [load1, setLoad1] = useState(false);
  let [load2, setLoad2] = useState(false);
  let [timeoutId, setTimeoutId] = useState(null);
  function changeState(str) {
    if (str === "load1") {
      setLoad1(true);
      setTimeoutId(setTimeout(() => setLoad1(false), 2000));
    } else {
      setLoad2(true);
      setTimeoutId(setTimeout(() => setLoad2(false), 2000));
    }
  }
  return (
    <div className="container">
      <div
        className={load1 || load2 ? "popup2" : "popup"}
        style={{ backgroundColor: load1 ? "black" : "#EB4748" }}
        onMouseEnter={() => {
          console.log(timeoutId);
          clearTimeout(timeoutId);
        }}
        onMouseLeave={() => {
          if (load1) setTimeoutId(setTimeout(() => setLoad1(false), 2000));
          else setTimeoutId(setTimeout(() => setLoad2(false), 2000));
        }}
      >
        {load1 && <p style={{ color: "white" }}>Just a usual message</p>}
        {load2 && <p style={{ color: "black" }}>Just a alert message</p>}
      </div>
      <div className="buttons">
        <button
          className="mb1"
          onClick={() => changeState("load1")}
          disabled={load2 ? true : false}
        >
          Notification message
        </button>
        <button
          className="mb2"
          onClick={() => changeState("load2")}
          disabled={load1 ? true : false}
        >
          Notification alert
        </button>
      </div>
    </div>
  );
}
