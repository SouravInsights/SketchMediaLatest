import Head from 'next/head';
import { Button, Flex, Grid, Image, Heading, Box, Text } from '@chakra-ui/core';
import React, { useState, useEffect } from 'react';
import Footer from 'components/Footer';
import { GraphQLClient } from 'graphql-request';
import { motion } from 'framer-motion';
import GridCardSection from '@/components/GridCardSection';
import WorksCard from 'components/WorksCard';
import Tag from 'components/Tag';

const WorksCardWrapper = motion.custom(Flex);

export async function getStaticProps() {
  const contentful = new GraphQLClient(
    'https://graphql.contentful.com/content/v1/spaces/x7ylmnfcd6wz?access_token=RkN6q-edXoFzeneM-xLAwfqLCj9bbMjRzBZmjmAYqN4'
  );

  const { worksCollection } = await contentful.request(
    `
    query {
      worksCollection {
        items {
           slug
           title
           desc
           coverImage {
             url
           }
           tags
        }
      }
    }
        `
  );

  return {
    props: {
      worksCollection
    },
    revalidate: 1
  };
}

const Work = ({ worksCollection }) => {
  console.log(worksCollection);
  return (
    <>
      <Flex flexDirection="column" mx="auto" align="center">
        <Heading
          fontSize={['5xl', '6xl', '7xl', '9xl']}
          fontWeight="extrabold"
          color="cyan.50"
        >
          Works
        </Heading>
        <Text
          fontSize={['xl', '2xl', '3xl', '3xl']}
          color="white"
          fontWeight="normal"
        >
          Some ideas we helped ship.
        </Text>
      </Flex>

      <GridCardSection
        columns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
        px={['30px', '30px', '80px', '80px']}
      >
        {worksCollection.items.map((work) => (
          <WorksCard
            title={work.title}
            desc={work.desc}
            src={work.coverImage.url}
            alt={work.slug}
          >
            {work.tags.length &&
              work.tags.map((tag, index) => <Tag key={index} tag={tag} />)}
          </WorksCard>
        ))}
      </GridCardSection>
      <Footer />
    </>
  );
};

export default Work;
