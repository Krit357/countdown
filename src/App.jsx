import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const initialCount = 9;
  const [count, setCount] = useState(initialCount);
  const [isCounting, setIsCounting] = useState(true);

  console.log(initialCount);

  useEffect(() => {
    if (count > 0 && isCounting) {
      const timer = setTimeout(() => {
        setCount(count - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (count === 0) {
      setIsCounting(false);
    }
  }, [count, isCounting]);

  const resetButton = () => {
    setCount(initialCount);
    setIsCounting(true);
  };

  return (
    <div>
      <div className={`counter ${!isCounting ? "hide" : ""}`}>
        <div className="nums">
          {[...Array(initialCount + 1)].map((_, i) => (
            <span key={i} className={count === initialCount - i ? "in" : ""}>
              {initialCount - i}
            </span>
          ))}
        </div>
        <h4>Get ready</h4>
      </div>
      <div className={`final ${!isCounting ? "show" : "hide"}`}>
        <h1>GO</h1>
        <button id="replay" className="replay" onClick={() => resetButton()}>
          Replay
        </button>
      </div>
    </div>
  );
}

export default App;
