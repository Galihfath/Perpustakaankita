// src/App.js
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import BookDetail from "./components/BookDetail";
import LandingPage from "./pages/LandingPage";

function App() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <ChakraProvider>
      {!hasEntered ? (
        <LandingPage onEnter={() => setHasEntered(true)} />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/book/:id" element={<BookDetail />} />
          </Routes>
        </>
      )}
    </ChakraProvider>
  );
}

export default App;
