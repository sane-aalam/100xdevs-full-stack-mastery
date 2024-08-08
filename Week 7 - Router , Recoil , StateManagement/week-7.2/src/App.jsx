// import React, { createContext, useContext, useState } from "react"; ContextAPI

import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import countAtom from "./store/atoms/count";

// RecoilRoot - anythings which is using the recoil, put inside the recoil root tag!
// RecoilRoot - Components that use recoil state need RecoilRoot to appear somewhere in the parent tree. A good place to put this is in your root component.

const App = () => {
  return (
    <div>
      {/* wrap into the recoilRoot */}
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
};

function Count() {
  return (
    <div>
      <CounterRender />
      <EvenComponentRender />
      <Button />
    </div>
  );
}

//* Render Component
// currentCount value is even,Then render the component,otherwise return null
function EvenComponentRender() {
  const countValue = useRecoilValue(countAtom);
  if (countValue % 2 == 0) {
    return <div style={{ backgroundColor: "gray" }}> Value is Even </div>;
  } else {
    return <div>{null}</div>;
  }
}

// Div Which show into Display
function CounterRender() {
  console.log("re-rending is processing or not!");
  const countValue = useRecoilValue(countAtom);
  console.log(countValue);
  return <div>{countValue}</div>;
}

// function component have to button
// increment button and decrement button
// both of the not-render, because of recoil state management!
// react-recoil super

function Button() {
  let setCounterValue = useSetRecoilState(countAtom);
  console.log("not render!");
  console.log(setCounterValue);
  /**
   (newValueOrUpdater) => {
    setRecoilValue$2(storeRef.current, recoilState, newValueOrUpdater);
    // current_value, recoilstate,update_value )
    // not think, how things is happinging - deep dive (DON't overthink!)
    // understand the working!
  }
   */
  return (
    <div>
      <button
        onClick={() => {
          console.log("count increment");
          setCounterValue((count) => count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          console.log("count decrement");
          setCounterValue((count) => count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
