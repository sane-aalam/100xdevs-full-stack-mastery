import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { lazy } from "react";
import { Suspense } from "react";

const Deshboard = lazy(() => import("./Pages/Deshboard"));
const Admin = lazy(() => import("./Pages/Admin"));
const Leading = lazy(() => import("./Pages/Admin"));

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
            <Route
              path="/Deshboard"
              element={
                <Suspense fallback={"loading..."}>
                  <Deshboard />
                </Suspense>
              }
            />
            <Route
              path="/"
              element={
                <Suspense fallback={"loading..."}>
                  <Leading />
                </Suspense>
              }
            />
            <Route
              path="/Admin"
              element={
                <Suspense fallback={"loading..."}>
                  <Admin />
                </Suspense>
              }
            />
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
