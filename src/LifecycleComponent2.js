import React, { useState, useEffect } from "react";
// import ChildComponent from "./ChildComponent";

function ChildComponent() {
  useEffect(
    () => () => {
      console.log("--componentWillUnmount--");
    },
    []
  );

  return (
    <div>
      <p>Эта строка пропадет, как только count станет равным 9</p>
    </div>
  );
}

function LifecycleComponent2() {
  let [count, setCount] = useState(0);
  useEffect(() => {
    console.log("--componentDidMount--");
  }, []);
  useEffect(() => {
    setCount(count);
    if (count > 0) {
      console.log(count);
    }
  }, [count]);
  useEffect(() => {
    if (count % 2 === 0 && count !== 0) {
      console.log("--shouldComponentUpdate--");
      setCount(count);
    }
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <h3>count: {count}</h3>
      {count < 9 && <ChildComponent />}
    </div>
  );
}

export default LifecycleComponent2;
