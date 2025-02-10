// src/pages/LandingPage.js
import React from 'react';
import { Box, Button, Text, VStack } from '@chakra-ui/react';

const LandingPage = ({ onEnter }) => {
  return (
    <Box
      w="100vw"
      h="100vh"
      bgGradient="linear(to-r, pink.300, red.400)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <VStack spacing={6}>
        <Text fontSize="4xl" fontWeight="bold" color="white">
          Selamat Datang di Perayaan Tahun Kedua Kita 📚❤️
        </Text>
        <Text fontSize="xl" color="whiteAlpha.800">
          Ga kerasa ya udah 2 tahun ajaa, kamu pasti ga espek kan kita bisa bertahan? Ini kisah kita, banyak turbulensi tapi kita tetap bertahan. Banyak Kisah suka ataupun duka yang terekam dalam memori. Well, mari rayakan perjalanan ini walau jarak memisahkan. Ini persembahanku buat kamu.
        </Text>
        <Button
          size="lg"
          colorScheme="red"
          bg="red.500"
          _hover={{ bg: 'red.600' }}
          onClick={onEnter}
        >
          Jelajahi Repository Cinta Kita
        </Button>
      </VStack>
    </Box>
  );
};

export default LandingPage;
