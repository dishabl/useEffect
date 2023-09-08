import React, { useState, useEffect } from "react";

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

  const options = {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpc2hhYmxAZXhhbXBsZS5jb20iLCJpZCI6MjA5LCJpYXQiOjE2OTQxNzExNjZ9.RoqUqAz_ipvTHIUCSBmvq2_oOQOO6NZmbSln413rubg",
    },
  };

  const fetchData = async () => {
    const leeds = await fetch(
      "https://todo-redev.herokuapp.com/api/todos?isCompleted=false",
      options
    );
    const data = await leeds.json();
    console.log(data);
  };

  useEffect(() => {
    fetchData();
    // console.log("--componentDidMount--");
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
