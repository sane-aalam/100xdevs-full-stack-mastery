
// RE-rendering the components
import { useState } from "react";

function App() {
    const [firstTitle, setFirstTittle] = useState("100xdev");
    const updateTittle = () => {
      setFirstTittle("100xdev cohort " + Math.floor(Math.random() * 100));
    };
  
  return (
    <div>
      <Header onClick={updateTittle} title="Hakirat cohort 100xdev" />
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