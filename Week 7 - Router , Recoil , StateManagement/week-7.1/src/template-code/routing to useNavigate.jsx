import { Deshboard } from "./Pages/Deshboard";
import { Leading } from "./Pages/Leading";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Leading Page
        </button>
        <button
          onClick={() => {
            navigate("/dehboard");
          }}
        >
          Deshboard
        </button>
      </div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/Deshboard" element={<Deshboard />} />
            <Route path="/" element={<Leading />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

//*---------------------------------------------Solution------------------------------------------

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Deshboard from "./Pages/Deshboard";
import Leading from "./Pages/Leading";
import Admin from "./Pages/Admin";

// Wrong Way > window.location.href = "</>"
// Right Way > useNavigate Hook came from
// Remember - you can not envoke useNavigate hook into the outside the BrowseRouter, you have to fix it

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route>
            <Route path="/Deshboard" element={<Deshboard />} />
            <Route path="/" element={<Leading />} />
            <Route path="/Admin" element={<Admin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function AppBar() {
  const navigate = useNavigate();
  // Error: useNavigate() may be used only in the context of a <Router> component.
  // This always put inside the BrowerRounterTag
  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Leading Page Loading
      </button>
      <button
        onClick={() => {
          navigate("/Deshboard");
        }}
      >
        Deshboard Page Loading
      </button>
      <button
        onClick={() => {
          navigate("/Admin");
        }}
      >
        Admin page loading
      </button>
    </div>
  );
}

export default App;
