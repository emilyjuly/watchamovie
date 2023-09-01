import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Search from "./pages/SearchPage";
import NotFound from "./pages/NotFound"

import NavBar from "./components/NavBar";


function RoutesApp() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<Movie />} />
        <Route path="search" element={<Search />} />

        <Route path="*" element={<NotFound text={'Page not Found!'} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
