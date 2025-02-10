// src/components/Navbar.js
import React from "react";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="red.500" py={3} px={5} color="white">
      <Flex justify="space-between" align="center">
        <Text fontSize="xl" fontWeight="bold">Repository Cinta 📚❤️</Text>
        <Flex gap={4}>
          <Link as={NavLink} to="/" _hover={{ textDecoration: "none", color: "pink.200" }}>
            Beranda
          </Link>
          <Link as={NavLink} to="/about" _hover={{ textDecoration: "none", color: "pink.200" }}>
            Tentang
          </Link>
        </Flex>
      </Flex>
    </Box>
    
  );
};

export default Navbar;
