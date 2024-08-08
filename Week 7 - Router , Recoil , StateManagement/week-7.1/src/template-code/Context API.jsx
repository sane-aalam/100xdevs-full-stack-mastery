import React, { createContext, useContext, useState } from "react";
import { MyContextCount } from "./MyContextCount";

// Context API get rid of prop drilling.
// Context API is a way to share data between components without having to explicitly pass a prop through every level of the tree.

//* way to use it
// 1. you need to create File to contextAPI to createContext()
// 2. wrap anyone that want's to use the telophorted value inside a provider
    // MyContextCount.Provider like this
// 3. you can use contextAPI like hook
// It help to re-render only components which is dynamic changed !

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <MyContextCount.Provider value={count}>
        <Count setCount={setCount} />
      </MyContextCount.Provider>
    </div>
  );
};

function Count({ count, setCount }) {
  return (
    <div>
      <CounterRender count={count} />
      <Button setCount={setCount} />
    </div>
  );
}

// Div Which show into Display
function CounterRender() {
  const count = useContext(MyContextCount);
  return <div>{count}</div>;
}

// Buttons to increase and decrease the counter of App
function Button({ setCount }) {
  const count = useContext(MyContextCount);
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
