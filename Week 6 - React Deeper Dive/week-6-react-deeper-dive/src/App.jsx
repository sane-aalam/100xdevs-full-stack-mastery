import { useState } from "react";

// 1. one-way to avoid re-rendering
function HeaderWithButton() {
  const [firstTitle, setFirstTittle] = useState("100xdev");
  const updateTittle = () => {
    setFirstTittle("100xdev cohort " + Math.floor(Math.random() * 100));
  };

  return (
    <div>
      <button onClick={updateTittle}>Click button changed contents</button>
      <Header title={firstTitle} />
    </div>
  );
}

function App() {
  return (
    <div>
      <HeaderWithButton />
      <Header title="Hakirat cohort 100xdev" />
      <Header title="Hakirat cohort 100xdev" />
      <Header title="Hakirat cohort 100xdev" />
      <Header title="Hakirat cohort 100xdev" />
    </div>
  );
}

function Header({ title }) {
  return <div>{title}</div>;
}

export default App;

/*
 ## 2. Re-rendering

- Please install react developer tools to visualise it
- to see all visualization process how to re-render the components, childerns, parents
- as we know, react nee to create for bluid dynamic web-application
- whenever we put something into dom,update something,delete somthing,this process is called render life-compoents
- Best example - (Counter-Application)
- In react, we try to minimize number of re-rendering calls, only which elements changed,only that elements(child,parents) should re-render!

### A re-render means that

1. React did some work to calculate what all should update in this component
2. The component actually got called (you can put a log to confirm this)
3. The inspector shows you a bounding box around the component

### It happens when

1. A state variable that is being used inside a component changes
2. A parent component re-render triggers all children re-rendering

 */

// How to minimize the re-rendering calls
// - passing into low-ancestor
// - aap jisko render karna chahat use ko hi state define kare
