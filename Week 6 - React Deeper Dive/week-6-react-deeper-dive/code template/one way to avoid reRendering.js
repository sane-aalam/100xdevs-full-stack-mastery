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
      <Header title="cohort fullstack 100xdev2.0" />
      <Header title="cohort fullstack 100xdev2.0" />
      <Header title="cohort fullstack 100xdev2.0" />
      <Header title="cohort fullstack 100xdev2.0" />
      <Header title="cohort fullstack 100xdev2.0" />
      <Header title="cohort fullstack 100xdev2.0" />
    </div>
  );
}

function Header({ title }) {
  return <div>{title}</div>;
}

export default App;
