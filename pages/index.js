import Head from "next/head";
import {
  Button,
  Flex,
  Grid,
  Image,
  Heading,
  Box,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  Stack,
  FormLabel,
  Textarea,
  useDisclosure
} from "@chakra-ui/core";
import React, { useEffect } from "react";
import Footer from "components/Footer";
import Testimonials from "components/Testimonials";
import GridSection from "@/components/GridSection";
import GridCard from "components/GridCard";
import GridHeader from "components/GridHeader";
import GridCardSection from "@/components/GridCardSection";
import WorksCard from "components/WorksCard";
import Tag from "components/Tag";
import GlowText from "components/Text";
import { TextButton } from "components/Buttons";
import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";
import { GraphQLClient } from "graphql-request";

export async function getStaticProps() {
  const contentful = new GraphQLClient(
    "https://graphql.contentful.com/content/v1/spaces/x7ylmnfcd6wz?access_token=RkN6q-edXoFzeneM-xLAwfqLCj9bbMjRzBZmjmAYqN4"
  );

  const { worksCollection, servicesCollection } = await contentful.request(
    `
    query {
      worksCollection(where: {
        featured: true
      }) {
        items {
          title
          slug
          desc
          tags
          coverImage {
            url
          }
        }
      } 
        
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
    props: {
      worksCollection,
      servicesCollection
    },
    revalidate: 1
  };
}

const HomeBox = motion.custom(Box);
const MotionHeading = motion.custom(Heading);

const Home = ({ worksCollection, servicesCollection }) => {
  const firstField = React.useRef();
  const btnRef = React.useRef();

  const { isOpen, onClose, onOpen, onToggle } = useDisclosure();

  useEffect(() => {
    function handleC(event) {
      if (event.key.toLowerCase() === "c") {
        if (isOpen) {
          onClose();
        } else {
          onOpen();
        }
      }
    }
    window.addEventListener("keydown", handleC);
    return () => {
      window.removeEventListener("keydown", handleC);
    };
  }, [onOpen, isOpen, onClose]);

  return (
    <HomeBox
      as="main"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      flexDirection={["column", "column", "row", "row"]}
    >
      <Head>
        <title>Home - Sketch Media</title>
      </Head>

      <Grid
        py={["20px", "20px", "80px", "80px"]}
        px={["30px", "30px", "120px", "160px"]}
        templateColumns={{ base: "repeat(1, 1fr)", md: "1fr 2fr" }}
        gap={10}
      >
        <Box>
          <Image src="/bg.png" />
        </Box>
        <Box>
          <MotionHeading
            fontSize={["5xl", "6xl", "7xl", "9xl"]}
            scaleY="scrollYProgress"
            fontWeight="extrabold"
            color="white"
          >
            Make Ideas
          </MotionHeading>
          <Heading
            fontSize={["5xl", "6xl", "7xl", "8xl", "9xl"]}
            fontWeight="extrabold"
            color="cyan.50"
          >
            Happen.
          </Heading>

          <Text
            my="4"
            fontSize={["md", "lg", "xl", "2xl"]}
            color="white"
            fontWeight="normal"
            lineHeight="shorter"
            letterSpacing="wide"
          >
            We guide you to build better experiences that matter to your
            untapped customers fast through design thinking.
          </Text>

          <GlowText text="anywhere to Contact Us!" onClick={onOpen} />
        </Box>
      </Grid>

      <Drawer
        isOpen={isOpen}
        placement="bottom"
        initialFocusRef={firstField}
        finalFocusRef={btnRef}
        onClose={onClose}
        preserveScrollBarGap
      >
        <DrawerOverlay />
        <DrawerContent bg="white" roundedTop={[20]}>
          <DrawerCloseButton />
          <DrawerHeader>
            <Heading
              textAlign="center"
              fontWeight="extrabold"
              color="gray.50"
              mt="20px"
            >
              Let's build together!
            </Heading>
          </DrawerHeader>
          <DrawerBody px={["25px", "25px", "220px", "280px"]}>
            <Stack color="gray.50" spacing={["20px", "20px", "20px", "20px"]}>
              <Box>
                <FormLabel htmlFor="fullname">Full name</FormLabel>
                <Input
                  borderColor="gray.50"
                  ref={firstField}
                  color="gray.50"
                  id="fullname"
                  placeholder="Your full name"
                />
              </Box>
              <Box>
                <FormLabel htmlFor="url">Email address</FormLabel>
                <Input
                  borderColor="gray.50"
                  ref={firstField}
                  color="gray.50"
                  placeholder="Your email address"
                />
              </Box>
              <Box>
                <FormLabel htmlFor="url">Company</FormLabel>
                <Input
                  borderColor="gray.50"
                  ref={firstField}
                  color="gray.50"
                  placeholder="Company name"
                />
              </Box>
              <Box>
                <FormLabel htmlFor="desc">What's your idea?</FormLabel>
                <Textarea
                  id="desc"
                  color="gray.50"
                  borderColor="gray.50"
                  placeholder="let us know what you would like to discuss"
                />
              </Box>
            </Stack>
            <Button
              my={["20px", "20px", "30px", "30px"]}
              bg="gray.50"
              color="white"
              fontWeight="bold"
            >
              Send to Sketch Media &#160; <FaLongArrowAltRight />
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <GridSection>
        <GridHeader title="WORKS" heading="Some ideas we have helped ship" />
      </GridSection>
      <GridCardSection
        columns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        px={["30px", "30px", "80px", "80px"]}
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

      <GridSection>
        <GridHeader title="SERVICES" heading="We can help you with" />
        <GridCardSection
          columns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        >
          {servicesCollection.items.map((service) => (
            <GridCard
              size={["2xl", "2xl", "3xl", "4xl"]}
              color="cyan.50"
              cardheading={service.title}
              carddescription={service.desc}
              src={service.serviceIcon.url}
              alt={service.slug}
              iconheight="200px"
            >
              <TextButton
                key={service.slug}
                href={`/services/${service.slug}`}
                text="Read More"
              />
            </GridCard>
          ))}
        </GridCardSection>
      </GridSection>

      <GridSection bgcolor="gray.250">
        <GridHeader title="WORKFLOW" heading="How we get it done" />
        <GridCardSection
          columns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        >
          <GridCard
            size={("xl", "xl", "2xl", "2xl")}
            color="offwhite.50"
            cardheading="Clear project goals"
            carddescription="We’ll discuss what your business needs most to thrive, and focus on it during the whole project.."
            src="https://images.ctfassets.net/x7ylmnfcd6wz/1IhJijGG5TDrRWbAgBCqlq/2f79acebcf9709cae34d61b178c9e830/service_icon_05.webp?h=250"
            alt="clear-project-goals"
          />
          <GridCard
            size={("xl", "xl", "2xl", "2xl")}
            color="offwhite.50"
            cardheading="Perfect toolset"
            carddescription="Thanks to our expertise we’ll offer you a couple of technologies, that will suit your interests best."
            src="https://images.ctfassets.net/x7ylmnfcd6wz/1IhJijGG5TDrRWbAgBCqlq/2f79acebcf9709cae34d61b178c9e830/service_icon_05.webp?h=250"
            alt="perfect-toolset"
          />
          <GridCard
            size={("xl", "xl", "2xl", "2xl")}
            color="offwhite.50"
            cardheading="Transparent work environment"
            carddescription="Slack workspace, Jira board, Github repository, you’ll get access to all of these to always be in the know how your project’s going on."
            src="https://images.ctfassets.net/x7ylmnfcd6wz/1IhJijGG5TDrRWbAgBCqlq/2f79acebcf9709cae34d61b178c9e830/service_icon_05.webp?h=250"
            alt="transparent-work-environment"
          />
          <GridCard
            size={("xl", "xl", "2xl", "2xl")}
            color="offwhite.50"
            cardheading="Afterproject relationship"
            carddescription="Our team will be happy to stay with you even after the project ends, handling your feature requests and maintenance, so you can grow your business in peace."
            src="https://images.ctfassets.net/x7ylmnfcd6wz/1IhJijGG5TDrRWbAgBCqlq/2f79acebcf9709cae34d61b178c9e830/service_icon_05.webp?h=250"
            alt="afterproject-relationship"
          />
        </GridCardSection>
      </GridSection>

      <GridSection>
        <GridHeader title="TESTIMONIALS" heading="What they say about us" />
        <GridCardSection
          columns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        >
          <Testimonials
            src="https://pbs.twimg.com/profile_images/1286145170015100928/LWHeOzjY_400x400.jpg"
            namework="John Doe - Dash Media"
            review="Worked intensively with Sketch Media team on multiple projects, our partnership has been a
            professional and productive experience with impressive results to date."
          />

          <Testimonials
            src="https://pbs.twimg.com/profile_images/1286145170015100928/LWHeOzjY_400x400.jpg"
            namework="John Doe - Dash Media"
            review="Worked intensively with Sketch Media team on multiple projects, our partnership has been a
            professional and productive experience with impressive results to date."
          />

          <Testimonials
            src="https://pbs.twimg.com/profile_images/1286145170015100928/LWHeOzjY_400x400.jpg"
            namework="John Doe - Dash Media"
            review="Worked intensively with Sketch Media team on multiple projects, our partnership has been a
            professional and productive experience with impressive results to date."
          />
        </GridCardSection>
      </GridSection>
      <Footer />
    </HomeBox>
  );
};

export default Home;
