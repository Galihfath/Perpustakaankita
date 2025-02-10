// src/components/BookDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import { Box, Image, Text, VStack, Button, HStack } from "@chakra-ui/react";
import books from "../data/Books";

const BookDetail = () => {
  const { id } = useParams();
  const book = books.find((b) => b.id.toString() === id);

  if (!book) {
    return <Text textAlign="center" fontSize="xl">Buku tidak ditemukan.</Text>;
  }

  return (
    <Box p={6} maxW="800px" mx="auto">
      <HStack alignItems="start" spacing={6}>
        {/* Gambar di kiri */}
        <Image
          src={book.cover}
          alt={book.title}
          boxSize="300px"
          objectFit="cover"
          borderRadius="md"
        />

        {/* Informasi di kanan */}
        <VStack align="start" spacing={4} flex={1}>
          <Text fontSize="2xl" fontWeight="bold">{book.title}</Text>
          <Text fontSize="lg" color="gray.600">Oleh {book.author}</Text>
          <Text fontSize="md" textAlign="justify">{book.synopsis}</Text>
          <Button as="a" href={book.pdf} target="_blank" colorScheme="red" size="md">
            Selengkapnya
          </Button>
        </VStack>
      </HStack>
    </Box>
  );
};

export default BookDetail;
