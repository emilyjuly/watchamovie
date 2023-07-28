import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <h2>Watch a Movie</h2>
      <Outlet />
    </div>
  );
}

export default App;
