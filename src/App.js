import "./App.css";
import React from "react";
// import ParentComponent from "./ParentComponent";
import LifecycleComponent from "./LifecycleComponent";
import LifecycleComponent2 from "./LifecycleComponent2";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ParentComponent /> */}
        <h3>----- Классовый компонент -----</h3>
        <LifecycleComponent />
        <h3>----- Функциональный компонент -----</h3>
        <LifecycleComponent2 />
      </header>
    </div>
  );
}

export default App;
