import Head from 'next/head';
import {
  Divider,
  Flex,
  Image,
  Heading,
  Box,
  Text,
  PseudoBox,
  Grid
} from '@chakra-ui/core';
import React, { useEffect } from 'react';
import Footer from 'components/Footer';
import { motion } from 'framer-motion';
import HeroSection from 'components/HeroSection';
import { PrimaryButton } from 'components/Buttons';

const MotionButton = motion.custom(PseudoBox);

const About = () => {
  return (
    <>
      <Head>
        <title>About - Sketch Media</title>
      </Head>
      <HeroSection
        title="ABOUT"
        heading="Who we are"
        description=" We’re a digital experience partner for companies that strive to put
          their customers first and scale capabilities quickly."
        buttontext="Meet our Team"
        src="https://images.ctfassets.net/x7ylmnfcd6wz/3HToCJNuqjS7ZF6Eu4tmCt/023496da489cf598b53049966340a778/become-one-of-us_2x.webp"
        alt="about"
      >
        <PrimaryButton text="View opportunities" height="60px" />
      </HeroSection>

      <Box
        backgroundRepeat="no-repeat"
        bgImage="url('https://res.cloudinary.com/emishalabs/image/upload/v1594749611/Sketch%20Media/aboutbg_upqxve.svg')"
      >
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(1, 1fr)'
          }}
          px={['30px', '30px', '220px', '260px']}
          py={['30px', '30px', '60px', '60px']}
        >
          <Flex flexDirection={['column', 'column', 'row', 'row']}>
            <Box>
              <Heading
                fontSize={['3xl', '4xl', '5xl', '6xl']}
                fontWeight="extrabold"
                color="white"
              >
                Our mission
              </Heading>
              <Text
                fontSize={['md', 'lg', 'xl', '2xl']}
                color="white"
                fontWeight="normal"
                w={['90%', '90%', '70%', '70%']}
              >
                Our awesome mission statement goes here. Lorem ipsum dollar
                sheet Lorem ipsum. Lorem ipsum dollar sheet Lorem ipsum
              </Text>
            </Box>
            <Box py={['30px', '30px', '0px', '0px']}>
              <Image src="https://images.ctfassets.net/x7ylmnfcd6wz/71VXHsSjP17BP7PRzAJPo0/0a4fa971350b12ff9290e5ab8daeac9e/mission.png?h=250" />
            </Box>
          </Flex>
          <Flex
            mt={['40px', '40px', '100px', '100px']}
            flexDirection={['column', 'column', 'row-reverse', 'row-reverse']}
          >
            <Box
              alignItems="right"
              textAlign={['left', 'left', 'right', 'right']}
            >
              <Heading
                fontSize={['3xl', '4xl', '5xl', '6xl']}
                fontWeight="extrabold"
                color="white"
              >
                Our vision
              </Heading>
              <Text
                fontSize={['md', 'lg', 'xl', '2xl']}
                color="white"
                fontWeight="normal"
                ml={['none', 'none', '80px', '80px']}
                //w={['90%', '90%', '70%', '70%']}
              >
                Our awesome vision statement goes here. Lorem ipsum dollar sheet
                Lorem ipsum. Lorem ipsum dollar sheet Lorem ipsum
              </Text>
            </Box>
            <Box py={['30px', '30px', '0px', '0px']}>
              <Image src="https://images.ctfassets.net/x7ylmnfcd6wz/4C3q5afmmeSxQ3ZU2hRP8P/91b3f9c7f6c67d3eb9790fc051255553/vision.png?h=250" />
            </Box>
          </Flex>
        </Grid>

        <Box>
          <Flex
            backgroundSize={['80%', '80%', '70%', '60%']}
            flexDirection="column"
          >
            <Heading
              fontSize={['3xl', '4xl', '5xl', '6xl']}
              fontWeight="extrabold"
              color="white"
              px={['30px', '30px', '220px', '260px']}
              pt={['30px', '30px', '60px', '60px']}
            >
              Our team
            </Heading>
            <Text
              mt={['5px', '5px', '20px', '20px']}
              fontSize={['md', 'lg', 'xl', '2xl']}
              color="white"
              fontWeight="normal"
              mx={['30px', '30px', '220px', '260px']}
              width={['80%', '80%', '55%', '40%']}
            >
              We’re a digital experience partner for companies that strive to
              put their customers first and scale capabilities quickly.
            </Text>
          </Flex>
          <Grid
            py="80px"
            px={['30px', '30px', '200px', '260px']}
            templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
            gap={6}
          >
            <Flex
              borderRadius="12px"
              bg="#2C2929"
              align="center"
              justify="center"
              maxWidth="320px"
              flexDirection="column"
              p={['20px', '20px', '30px', '30px']}
              boxShadow="0px 15px 30px rgba(0, 0, 0, 0.25)"
            >
              <Image
                w="164px"
                src="https://pbs.twimg.com/profile_images/1286145170015100928/LWHeOzjY_400x400.jpg"
                borderRadius="50%"
              />
              <Heading mt="15px" fontSize="2xl" fontWeight="bold" color="white">
                John Doe
              </Heading>
              <Text fontSize="xl" fontWeight="normal" color="#989191">
                Design Lead
              </Text>
            </Flex>
            <Flex
              borderRadius="12px"
              bg="#2C2929"
              align="center"
              justify="center"
              maxWidth="320px"
              flexDirection="column"
              p={['20px', '20px', '30px', '30px']}
              boxShadow="0px 15px 30px rgba(0, 0, 0, 0.25)"
            >
              <Image
                w="164px"
                src="https://pbs.twimg.com/profile_images/1286145170015100928/LWHeOzjY_400x400.jpg"
                borderRadius="50%"
              />
              <Heading mt="15px" fontSize="2xl" fontWeight="bold" color="white">
                John Doe
              </Heading>
              <Text fontSize="xl" fontWeight="normal" color="#989191">
                Design Lead
              </Text>
            </Flex>
            <Flex
              borderRadius="12px"
              bg="#2C2929"
              align="center"
              justify="center"
              maxWidth="320px"
              flexDirection="column"
              p={['20px', '20px', '30px', '30px']}
              boxShadow="0px 15px 30px rgba(0, 0, 0, 0.25)"
            >
              <Image
                w="164px"
                src="https://pbs.twimg.com/profile_images/1286145170015100928/LWHeOzjY_400x400.jpg"
                borderRadius="50%"
              />
              <Heading mt="15px" fontSize="2xl" fontWeight="bold" color="white">
                John Doe
              </Heading>
              <Text fontSize="xl" fontWeight="normal" color="#989191">
                Design Lead
              </Text>
            </Flex>
          </Grid>
        </Box>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)'
          }}
          gap={8}
          py={['30px', '30px', '80px', '80px']}
          px={['30px', '30px', '160px', '160px']}
        >
          <Flex
            borderRadius="12px"
            bg="white"
            flexDirection="column"
            p={['20px', '20px', '30px', '30px']}
            boxShadow="0px 15px 30px rgba(0, 0, 0, 0.25)"
          >
            <Heading
              fontSize={['2xl', '2xl', '4xl', '4xl']}
              fontWeight="extrabold"
              color="gray.50"
            >
              Contact Details
            </Heading>
            <Text fontSize="bold" fontSize={['xl']} mt={4}>
              Sketch Media
              <br />
              Street Number 12
              <br />
              29075 Kuwait +49 (0) 30 85 730 603
              <br /> buildat@sketchmedia.com
            </Text>
          </Flex>
          <Flex
            borderRadius="12px"
            bg="black"
            color="white"
            flexDirection="column"
            p={['20px', '20px', '30px', '30px']}
            boxShadow="0px 15px 30px rgba(0, 0, 0, 0.25)"
          >
            <Heading
              fontSize={['2xl', '2xl', '4xl', '4xl']}
              fontWeight="extrabold"
            >
              Join Us!
            </Heading>
            <Text fontSize="bold" fontSize={['xl']} mt={4}>
              We are hiring for frontend developers to join our awesome team at
              Sketch Media. <br /> Come build with us!
            </Text>
            <MotionButton
              as="button"
              h="50px"
              maxWidth="300px"
              borderRadius="18px"
              px="30px"
              outline="none"
              bg="rgba(163, 247, 106, 0.4)"
              fontSize={['lg', 'lg', 'xl', 'xl']}
              fontWeight="bold"
              mt={4}
              color="green.50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
            >
              Take me to the job post
            </MotionButton>
          </Flex>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default About;
