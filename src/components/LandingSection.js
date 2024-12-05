import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365" // Set background color for the section
  >
    {/*Centered content with VStack*/}
    <VStack spacing={4} align="center">
      {/* Display avatar image */}
      <Avatar src="https://i.pravatar.cc/150?img=7" size="2xl" />

      {/*Display greeting*/}
      <Heading size="xl" color="white">
        {greeting}
      </Heading>

      {/*Display bio lines*/}
      <Text fontSize="lg" color="white">
        {bio1}
      </Text>
      <Text fontSize="lg" color="white">
        {bio2}
      </Text>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
