// src/pages/About.js
import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <Box p={6} textAlign="center">
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">Tentang Perpustakaan Cinta 📚❤️</Text>
        <Text fontSize="md" maxW="600px">
          Perpustakaan Cinta adalah tempat di mana kamu bisa menemukan berbagai buku yang
          menghangatkan hati. Kami percaya bahwa setiap buku memiliki kisah yang dapat
          membawa cinta dan inspirasi ke dalam hidupmu.
        </Text>
        <Text fontSize="md" maxW="600px">
          Temukan koleksi buku terbaik dengan berbagai genre, mulai dari roman, puisi,
          hingga kisah-kisah inspiratif yang penuh makna.
        </Text>
      </VStack>
    </Box>
  );
};

export default About;
