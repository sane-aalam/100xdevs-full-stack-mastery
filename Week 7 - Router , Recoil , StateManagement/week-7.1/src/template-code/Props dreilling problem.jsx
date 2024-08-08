import React, { useContext, useState } from "react";

// Context API get rid of prop drilling.
// Context API is a way to share data between components without having to 
// explicitly pass a prop through every level of the tree.
const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Count count={count} setCount={setCount} />
    </div>
  );
};

function Count({ count, setCount }) {
  return (
    <div>
      <CounterRender count={count} />
      <Button count={count} setCount={setCount} />
    </div>
  );
}

// Div Which show into Display
function CounterRender({ count }) {
  return <div>{count}</div>;
}

// Buttons to increase and decrease the counter of App
function Button({ count, setCount }) {

  console.log(count);
  return (
    <div>
      <button
        onClick={() => {
          console.log("count increment", count);
          setCount(count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          console.log("count decrement", count);
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
