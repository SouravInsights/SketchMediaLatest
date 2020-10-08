import {
  Button,
  Flex,
  Heading,
  Box,
  Text,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/core';
import React from 'react';
import styles from '../styles/styles.module.css';
import { motion } from 'framer-motion';
import {
  FaFacebook,
  FaTwitter,
  FaDribbble,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';
import ContactButton from 'components/Buttons';

const Footer = () => {
  return (
    <Flex
      className={styles.footer}
      px={['20px', '40px', '60px', '60px']}
      flexDirection="column"
      align="center"
      justify="center"
    >
      <Heading
        fontSize={['2xl', '4xl', '5xl', '6xl']}
        mt={['20px', null, null, '38px']}
        fontWeight="extrabold"
        textAlign="center"
        color="cyan.50"
        zIndex="1"
      >
        Build products people love.
      </Heading>
      <ContactButton text="Let's Talk" />

      <Box
        zIndex="1"
        display="flex"
        my="34px"
        flexDirection="column"
        alignItems="center"
      >
        <Box w={['300px', '350px', '400px', '500px']} textAlign="center">
          <List d="flex" justifyContent="space-around">
            <ListItem d="inline-block" cursor="pointer">
              <ListIcon>
                <FaFacebook color="white" size="1.5em" />
              </ListIcon>
            </ListItem>
            <ListItem d="inline-block" cursor="pointer">
              <ListIcon>
                <FaTwitter color="white" size="1.5em" />
              </ListIcon>
            </ListItem>
            <ListItem d="inline-block" cursor="pointer">
              <ListIcon>
                <FaDribbble color="white" size="1.5em" />
              </ListIcon>
            </ListItem>
            <ListItem d="inline-block" cursor="pointer">
              <ListIcon>
                <FaGithub color="white" size="1.5em" />
              </ListIcon>
            </ListItem>
            <ListItem d="inline-block" cursor="pointer">
              <ListIcon>
                <FaLinkedin color="white" size="1.5em" />
              </ListIcon>
            </ListItem>
          </List>
        </Box>
        <Text
          zIndex="1"
          as="b"
          color="white"
          textAlign="center"
          fontSize={['sm', 'sm', 'lg', 'lg']}
        >
          Copyright @ 2020 Sketch Media, all rights Reserved.
        </Text>
      </Box>
    </Flex>
  );
};

export default Footer;
