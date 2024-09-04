import { useState } from "react";
import Movies from "./pages/Movies";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bookmarks from "./pages/Bookmarks";
import Home from "./pages/Home";
import TVserias from "./pages/TVserias";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Movies />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Serias" element={<TVserias />}></Route>
        <Route path="/Bookmarks" element={<Bookmarks />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
