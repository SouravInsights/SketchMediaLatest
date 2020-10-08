import React from "react";
import { Heading, Box, Text } from "@chakra-ui/core";

function JobCard({ jobTitle, location, status, children }) {
  return (
    <Box
      borderColor="gray.200"
      bg="gray.250"
      boxShadow="0px 20px 20px rgba(18, 18, 18, 1)"
      color="gray.200"
      borderRadius="16px"
      p={["30px", "30px", "40px", "40px"]}
    >
      <Heading
        pb="12px"
        fontSize="2xl"
        color="offwhite.50"
        fontWeight="extrabold"
        letterSpacing="widest"
      >
        {jobTitle}
      </Heading>
      <Text pb="12px" fontSize="xl" color="offwhite.50" fontWeight="normal">
        {location}
      </Text>
      <Text mb="25px" fontSize="lg" color="offwhite.50" fontWeight="bold">
        {status}
      </Text>
      {children}
    </Box>
  );
}

export default JobCard;
