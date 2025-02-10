// src/components/BookCard.js
import React from "react";
import { Box, Image, Text, VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      boxShadow="md"
      w={{ base: "100%", sm: "300px" }}
      textAlign="center"
      bg="white"
      _hover={{ boxShadow: "xl", transform: "scale(1.05)", transition: "0.3s" }}
    >
      <Image
        src={book.cover}
        alt={book.title}
        boxSize="250px"
        objectFit="cover"
        borderRadius="md"
        mx="auto"
      />
      <VStack spacing={3} mt={4}>
        <Text fontSize="lg" fontWeight="bold" noOfLines={2}>{book.title}</Text>
        <Text fontSize="sm" color="gray.500" noOfLines={1}>{book.author}</Text>
        <Button as={Link} to={`/book/${book.id}`} colorScheme="red" size="sm" width="80%">
          Lihat Detail
        </Button>
      </VStack>
    </Box>
  );
};

export default BookCard;
