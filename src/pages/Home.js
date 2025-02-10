// src/pages/Home.js
import React from "react";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import BookCard from "../components/BookCard";
import books from "../data/Books";

const Home = () => {
  return (
    <Box p={6} textAlign="center">
      <Text fontSize="2xl" fontWeight="bold" mb={4}>Selamat Datang di Repository Cinta 📚❤️</Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Home;
