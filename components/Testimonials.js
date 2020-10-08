import React from 'react';
import {
  Box,
  Heading,
  Flex,
  Text,
  Image,
  Link,
  PseudoBox
} from '@chakra-ui/core';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const TestimonialsWrapper = motion.custom(Flex);

const Testimonials = ({ src, namework, review }) => {
  return (
    <>
      {/* Card Section Start */}
      <TestimonialsWrapper
        wrap="wrap"
        color="gray.200"
        bg="black"
        borderRadius="5px"
        borderLeft="5px solid"
        borderColor="gray.200"
        boxShadow="0px 20px 20px rgba(0, 0, 0, 0.45)"
        whileHover={{ scale: 1.1 }}
      >
        {/* Author Pic */}
        <Box m="20px">
          <Image
            src={src}
            rounded="full"
            size={['80px', '80px', '80px', '80px']}
          />
        </Box>

        <Box top="110px" my="10px" mx="20px">
          {/* Author name and work */}
          <Heading color="white" fontSize={['sm', 'sm', 'md', 'md']}>
            {namework}
          </Heading>

          {/* Author Quote */}
          <Box mt="8px">
            <Text fontSize={['sm', 'sm', 'md', 'md']} fontWeight="normal">
              <Text as="span" color="white">
                <FaQuoteLeft size="1em" />
              </Text>
              {review}
              <Text as="span" color="white">
                <FaQuoteRight size="1em" />
              </Text>
            </Text>
          </Box>
        </Box>
      </TestimonialsWrapper>
      {/* Card End */}
    </>
  );
};
export default Testimonials;
