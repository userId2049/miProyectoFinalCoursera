import React from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const ContactMeSection = () => {
  // Custom hooks for submission and alerts
  const { isLoading, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  // Formik configuration
  const formik = useFormik({
    initialValues: {
      firstName: "", // Initial value for the name field
      email: "", // Initial value for the email field
      type: "hireMe", // Default enquiry type
      comment: "", // Initial value for the message field
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Name is required"), // Name validation
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"), // Email validation
      type: Yup.string().required("Type of enquiry is required"), // Enquiry type validation
      comment: Yup.string()
        .min(25, "Must be at least 25 characters") // > 25 characters
        .required("Message is required"), // Message validation
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await submit(values); // Submit the form
        if (res.type === "success") {
          // Show success alert
          onOpen("success", `Thank you, ${values.firstName}!`);
          resetForm(); // Reset the form on success
        } else {
          // Show error alert
          onOpen("error", res.message || "Something went wrong. Please try again.");
        }
      } catch (error) {
        // Fallback for unexpected errors
        onOpen("error", "An unexpected error occurred. Please try again.");
      }
    },
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8" // Set the background color
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              {/* Name Field */}
              <FormControl
                isInvalid={formik.touched.firstName && formik.errors.firstName}
              >
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps("firstName")}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>

              {/* Email Field */}
              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              {/* Type of Enquiry Field */}
              <FormControl isInvalid={formik.touched.type && formik.errors.type}>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type" {...formik.getFieldProps("type")}>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">Open source consultancy session</option>
                  <option value="other">Other</option>
                </Select>
                <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
              </FormControl>

              {/* Message Field */}
              <FormControl
                isInvalid={formik.touched.comment && formik.errors.comment}
              >
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps("comment")}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>

              {/* Submit Button */}
              <Button
                type="submit"
                colorScheme="purple"
                width="full"
                isLoading={isLoading} // Show loading indicator while submitting
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
