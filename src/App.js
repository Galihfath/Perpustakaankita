// src/App.js
import React, { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { ChakraProvider, Box, Link, Text, Flex, Image } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import BookDetail from "./components/BookDetail";
import LandingPage from "./pages/LandingPage";
import backsound from "./assets/audio/backsound.mp3"; // Import file audio

const instagramIconUrl = "https://cdn.simpleicons.org/instagram/E4405F"; // Online Instagram Icon

function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [playMusic, setPlayMusic] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (hasEntered) {
      setTimeout(() => {
        setPlayMusic(true);
      }, 100);
    }
  }, [hasEntered]);

  useEffect(() => {
    if (playMusic && audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Autoplay error:", error);
      });
    }
  }, [playMusic]);

  return (
    <ChakraProvider>
      {!hasEntered ? (
        <LandingPage onEnter={() => setHasEntered(true)} />
      ) : (
        <Flex direction="column" minHeight="100vh">
          {/* Audio Player */}
          <audio ref={audioRef} src={backsound} loop />
          <Navbar />
          <Box flex="1" minH="calc(100vh - 100px)">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/book/:id" element={<BookDetail />} />
            </Routes>
          </Box>
          
          {/* Footer */}
          <Box as="footer" textAlign="center" py={4} bg="gray.100">
            <Text fontSize="sm">Galih Fathurrochman & Upit Uswatun Hasanah</Text>
            <Text fontSize="sm">11 Februari 2025</Text>
            <Flex justify="center" align="center" gap={4} mt={2}>
              <Link href="https://instagram.com/galihfath" isExternal>
                <Image src={instagramIconUrl} alt="Instagram" boxSize="24px" />
              </Link>
              <Link href="https://instagram.com/upituh19" isExternal>
                <Image src={instagramIconUrl} alt="Instagram" boxSize="24px" />
              </Link>
            </Flex>
          </Box>
        </Flex>
      )}
    </ChakraProvider>
  );
}

export default App;
