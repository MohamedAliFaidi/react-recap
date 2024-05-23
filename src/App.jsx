import "./App.css";

import { useEffect, useState } from "react";
import ComponentOne from "./components/ComponentOne";
import ComponentTwo from "./components/ComponentTwo";
import BlackFriday from "./components/BlackFriday";
import HOC from "./components/HOC";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [black, setBlack] = useState("");

  const getBackendData = () => {
    return "Black Friday list from backend ";
  };

  useEffect(() => {
    setBlack(getBackendData());
  }, []);

  const inc = () => {
    setCount(count + 1);
  };
  const dec = () => {
    setCount(count - 1);
  };

  const onInputChange = (e) => {
    setText(e.target.value);
  };

  console.log(window.location.pathname);

  return (
    <>
      <a href="/black-friday">BlackFriday</a>
      <a href="/">Home</a>

      <div>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
      </div>
      <div>
        <input onChange={onInputChange} placeholder="type something ..." />
      </div>
      <> {count}</>
      <br />
      <hr />
      <>{text}</>

      <div>
        {window.location.pathname == "/" ? (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {" "}
            <ComponentOne />
            <ComponentTwo />{" "}
          </div>
        ) : (
          <HOC>
            <BlackFriday black={black} />
          </HOC>
        )}
      </div>
    </>
  );
}

export default App;
