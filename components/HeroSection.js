import React from 'react';
import { Box, Grid, Heading, Text, Image } from '@chakra-ui/core';

function HeroSection({
  title,
  heading,
  description,
  buttontext,
  src,
  alt,
  children
}) {
  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={10}
      px={['30px', '30px', '100px', '120px']}
      py={['30px', '30px', '80px', '80px']}
    >
      <Box>
        <Heading
          fontSize="xl"
          color="cyan.50"
          fontWeight="extrabold"
          letterSpacing="0.20rem"
          color="offwhite.50"
        >
          {title}
        </Heading>
        <Heading
          py={['40px']}
          fontSize="5xl"
          color="cyan.50"
          fontWeight="extrabold"
          letterSpacing="wide"
        >
          {heading}
        </Heading>
        <Text
          fontSize={['xl', 'xl', '2xl', '2xl']}
          color="offwhite.50"
          fontWeight="normal"
          pb={['40px']}
        >
          {description}
        </Text>
        {children}
      </Box>
      <Box justifyContent="flex-end">
        <Image src={src} alt={alt} />
      </Box>
    </Grid>
  );
}

export default HeroSection;
