import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

// List of projects with title, description, and image source
const projects = [
  {
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    getImageSrc: () => require("../images/photo1.jpg"), // Image for the project
  },
  {
    title: "React Infinite Scroll",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d" // Set a dark green background for the section
      isDarkBackground
      p={8} // Add padding around the section
      alignItems="flex-start"
      spacing={8}
    >
      {/* Section heading */}
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>

      {/* Grid layout for project cards */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))" // Create a 2-column grid
        gridGap={8} // Add spacing between grid items
      >
        {/* Map through the projects array to render a Card for each project */}
        {projects.map((project) => (
          <Card
            key={project.title} // Use project title as unique key
            title={project.title} // Pass project title to Card component
            description={project.description} // Pass project description
            imageSrc={project.getImageSrc()} // Pass project image
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
