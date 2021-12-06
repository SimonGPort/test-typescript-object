import React, { useState } from "react";
import "./App.css";

interface stateAppType {
  first: string;
  second: string;
  third: string;
}

type stateAppTypeKey = keyof stateAppType;

function App() {
  const [stateApp, setStateApp] = useState<stateAppType>({
    first: "",
    second: "",
    third: "",
  });

  const [inputApp, setInputApp] = useState("");

  const changeStateApp = (type: stateAppTypeKey): void => {
    let tempStateApp = { ...stateApp };
    tempStateApp[type] = inputApp;
    setStateApp(tempStateApp);
  };

  return (
    <div className="App">
      <div style={{ minHeight: "500px", backgroundColor: "tomato" }}>
        <div>{stateApp.first}</div>
        <div>{stateApp.second}</div>
        <div>{stateApp.third}</div>
      </div>
      <div>
        <button
          onClick={() => {
            changeStateApp("first");
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            changeStateApp("second");
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            changeStateApp("third");
          }}
        >
          3
        </button>
      </div>
      <div>
        <input
          value={inputApp}
          onChange={(evt) => {
            setInputApp(evt.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default App;
