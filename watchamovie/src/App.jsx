import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Search from "./components/Search/Search";

import "./App.css";

function App() {
    return (
        <div className="App">
            <NavBar />

            <Outlet />
        </div>
    );
}

export default App;
