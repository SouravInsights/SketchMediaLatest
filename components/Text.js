import React from 'react';
import { Text } from '@chakra-ui/core';
import styles from '../styles/styles.module.css';

export default function GlowText({ key, text, ...props }) {
  return (
    <Text
      as="button"
      variant="ghost"
      fontSize={['md', 'md', 'xl', 'xl']}
      fontWeight="bold"
      outline="none"
      className={styles.shiny}
      {...props}
    >
      Press
      <Text as="span" mx="8px" fontWeight="extrabold">
        C
      </Text>
      {text}
    </Text>
  );
}
