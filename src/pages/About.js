// src/pages/About.js
import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <Box p={6} textAlign="center">
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">Tentang Repository Cinta 📚❤️</Text>
        <Text fontSize="md" maxW="600px">
          Repository adalah tempat di mana kenangan kita tersimpan. Semoga semua yang telah berlalu bisa jadi pembelajaran kita.

          Repository ini dibuat dalam rangka 2nd annivesary kita. Hopefully have fun.
        </Text>
        <Text fontSize="md" maxW="600px">
        ❤️❤️ Temukan koleksi terbaik dengan penuh makna ❤️❤️
        </Text>
      </VStack>
    </Box>
  );
};

export default About;
