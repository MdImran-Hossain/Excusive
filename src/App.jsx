import React from "react";
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages/Home/Home";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Home />}/> 
          <Route path="/blog" element={" this is blog page"}/> 
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;