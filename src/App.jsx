import React from "react";

import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages/Home";
import Header from "./component/Page_rootlayout/Headder/Header";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Header />}/> 
          <Route path="/blog" element={" this is blog page"}/> 
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;