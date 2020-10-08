import { Flex, Image, Heading, Box, Text } from '@chakra-ui/core';
import React from 'react';

const ServiceCard = ({ data, isReversed }) => {
  return (
    <Flex
      index="serviceIdx"
      py={['10px', '15px', '40px', '60px']}
      textAlign={['center', 'left']}
      direction={['column', 'column', isReversed ? 'row-reverse' : 'row']}
      px={['20px', '30px', '100px', '160px']}
    >
      <Box w={['100%', '100%', '60%', '60%']}>
        <Heading
          fontSize={['2xl', '3xl', '4xl', '4xl']}
          fontWeight="extrabold"
          color="yellow.50"
        >
          {data.title}
        </Heading>
        <Text
          fontSize={['lg', 'xl', '2xl', '2xl']}
          color="white"
          fontWeight="normal"
        >
          {data.description}
        </Text>
      </Box>
      <Box>
        <Image src={data.url} />
      </Box>
    </Flex>
  );
};

export default ServiceCard;
