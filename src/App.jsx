import { useState } from "react";
import Movies from "./pages/Movies";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bookmarks from "./pages/Bookmarks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Movies />}></Route>
        <Route path="/Bookmarks" element={<Bookmarks />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
