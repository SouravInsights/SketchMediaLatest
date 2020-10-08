import Head from 'next/head';
import {
  Button,
  Flex,
  Image,
  Heading,
  Box,
  Link,
  Grid,
  Text,
  PseudoBox
} from '@chakra-ui/core';
import Footer from '@/components/Footer';
import { GraphQLClient } from 'graphql-request';
import NextLink from 'next/link';
import { motion } from 'framer-motion';

const WorksCardWrapper = motion.custom(Flex);

const contentful = new GraphQLClient(
  'https://graphql.contentful.com/content/v1/spaces/x7ylmnfcd6wz?access_token=RkN6q-edXoFzeneM-xLAwfqLCj9bbMjRzBZmjmAYqN4'
);

export async function getStaticProps({ params }) {
  const { servicesCollection, worksCollection } = await contentful.request(
    `
    query ServicePageQuery($slug: String!, $tags: String) {
      servicesCollection(where: {
      slug: $slug
      }) {
        items {
          title
          desc
          serviceIcon {
            url
          }
        }
      },
      worksCollection(where: {
        slug_contains: $tags
       }) {
         items {
           title
           desc
           coverImage {
             url
           }
           tags
         }
       }
    }
    `,
    {
      slug: params.slug,
      Tag: params.tags
    }
  );

  return {
    props: {
      servicesCollection,
      worksCollection
    },
    revalidate: 1
  };
}

export async function getStaticPaths() {
  const { servicesCollection } = await contentful.request(
    `
      query {
        servicesCollection {
          items {
            slug
            title
            desc
            serviceIcon {
              url
            }
          }
        }
      }
    `
  );

  return {
    paths: servicesCollection.items.map(({ slug }) => ({
      params: { slug }
    })),
    fallback: false
  };
}

export default ({ servicesCollection, worksCollection }) => {
  console.log(servicesCollection.items.desc);

  return (
    <>
      {servicesCollection.items.map((service) => (
        <>
          <Grid
            px={['30px', '30px', '220px', '260px']}
            templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
            mb={['40px', '40px', '80px', '80px']}
          >
            <Box justifyContent="center">
              <Heading
                fontSize={['3xl', '4xl', '5xl', '6xl']}
                fontWeight="extrabold"
                color="cyan.50"
              >
                {service.title}
              </Heading>

              <Text
                fontSize={['xl', 'xl', '2xl', '2xl']}
                fontWeight="normal"
                mt={4}
                color="white"
              >
                {service.desc}
              </Text>
            </Box>
            <Box>
              {service.serviceIcon && (
                <Image width="500px" src={service.serviceIcon.url} />
              )}
            </Box>
          </Grid>
          <Heading
            fontSize={['2xl', '2xl', '4xl', '5xl']}
            fontWeight="extrabold"
            color="cyan.50"
            textAlign="center"
            p={6}
          >
            Our works on {service.title}
          </Heading>
        </>
      ))}

      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
        gap={10}
        px={['30px', '30px', '80px', '80px']}
      >
        {worksCollection.items.map((work) => (
          <WorksCardWrapper
            zIndex="0"
            flex="0 1 auto"
            my={['20px', '20px', '40px', '40px']}
            mx="auto"
            borderRadius="12px"
            flexDirection="column"
            align="center"
            maxWidth="526px"
            bg="#2C2929"
            boxShadow="0px 15px 30px rgba(0, 0, 0, 0.25)"
            whileHover={{ scale: 1.1 }}
          >
            {work.coverImage && (
              <Image
                borderRadius="10px"
                zIndex="1"
                my="20px"
                maxWidth="90%"
                src={work.coverImage.url}
                alt={work.slug}
              />
            )}
            <Heading
              mb="20px"
              w="90%"
              fontWeight="extrabold"
              color="cyan.50"
              fontSize={['xl', 'xl', '2xl', '2xl']}
            >
              {work.title}
              &nbsp; - &nbsp;
              <Heading
                as="span"
                color="white"
                fontSize={['xl', 'xl', '2xl', '2xl']}
                fontWeight="medium"
              >
                {work.desc}
              </Heading>
            </Heading>
            <Flex w="90%" mb="20px" justifyContent="flex-start" wrap="wrap">
              {work.tags.length &&
                work.tags.map((tag, index) => (
                  <Box
                    px={['6px', '6px', '8px', '8px']}
                    borderRadius="20px"
                    bg="#5A5454"
                    color="white"
                    m="5px"
                    textAlign="center"
                    fontSize={['xs', 'sm', 'sm', 'sm']}
                    fontWeight="medium"
                    key={index}
                  >
                    {tag}
                  </Box>
                ))}
            </Flex>
            <Box
              w="90%"
              mb="20px"
              d="flex"
              flexDirection="row"
              justify="center"
              align="center"
            >
              <Button
                bg="black"
                borderRadius="14px"
                w="auto"
                h="40px"
                color="white"
                fontSize="xl"
                fontWeight="bold"
              >
                See live
              </Button>
            </Box>
          </WorksCardWrapper>
        ))}
        ;
      </Grid>
      <Footer />
    </>
  );
};
