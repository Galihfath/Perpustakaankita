// src/components/BookCard.js
import React from "react";
import { Box, Image, Text, VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} boxShadow="md">
      <Image src={book.image} alt={book.title} borderRadius="md" />
      <VStack spacing={2} mt={4}>
        <Text fontSize="lg" fontWeight="bold" textAlign="center">
          {book.title}
        </Text>
        <Text fontSize="sm" color="gray.500" textAlign="center">
          {book.author}
        </Text>
        <Button as={Link} to={`/book/${book.id}`} colorScheme="red" size="sm">
          Lihat Detail
        </Button>
      </VStack>
    </Box>
  );
};

export default BookCard;
