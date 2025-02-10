// src/pages/Home.js
import React from "react";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import BookCard from "../components/BookCard";

const books = [
  {
    id: "1",
    title: "Cinta di Ujung Senja",
    author: "Raka Anindita",
    image: "/images/cinta-senja.jpg",
  },
  {
    id: "2",
    title: "Mawar untuk Kekasih",
    author: "Sinta Ardianti",
    image: "/images/mawar-kekasih.jpg",
  },
  {
    id: "3",
    title: "Pelangi Setelah Hujan",
    author: "Dimas Pradipta",
    image: "/images/pelangi-hujan.jpg",
  }
];

const Home = () => {
  return (
    <Box p={6} textAlign="center">
      <Text fontSize="2xl" fontWeight="bold" mb={4}>Selamat Datang di Perpustakaan Cinta 📚❤️</Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Home;
