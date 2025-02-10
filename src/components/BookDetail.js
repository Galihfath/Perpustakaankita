// src/components/BookDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import { Box, Image, Text, VStack, Button } from "@chakra-ui/react";

const books = [
  {
    id: "1",
    title: "Cinta di Ujung Senja",
    author: "Raka Anindita",
    image: "/images/cinta-senja.jpg",
    pdf: "/pdfs/cinta-senja.pdf",
    description: "Sebuah kisah cinta yang abadi dalam dekapan senja."
  },
  // Tambahkan data buku lainnya di sini
];

const BookDetail = () => {
  const { id } = useParams();
  const book = books.find((b) => b.id === id);

  if (!book) {
    return <Text textAlign="center" fontSize="xl">Buku tidak ditemukan.</Text>;
  }

  return (
    <Box p={6} textAlign="center">
      <Image src={book.image} alt={book.title} borderRadius="md" mx="auto" />
      <VStack spacing={4} mt={4}>
        <Text fontSize="2xl" fontWeight="bold">{book.title}</Text>
        <Text fontSize="lg" color="gray.600">Oleh {book.author}</Text>
        <Text fontSize="md">{book.description}</Text>
        <Button as="a" href={book.pdf} target="_blank" colorScheme="red" size="md">
          Baca Buku
        </Button>
      </VStack>
    </Box>
  );
};

export default BookDetail;
