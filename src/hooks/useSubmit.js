import { useState } from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Custom hook to simulate an API call
 * It randomly simulates success or failure with 50% probability.
 */
const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (data) => {
    const random = Math.random();
    setLoading(true); // Start loading
    try {
      await wait(2000); // Simulate network delay
      if (random < 0.5) {
        // Simulate an error
        throw new Error("Something went wrong");
      }

      // Simulate success
      const successResponse = {
        type: "success",
        message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`,
      };
      setResponse(successResponse); // Update the response state
      return successResponse; // Return the success response
    } catch (error) {
      // Simulate error
      const errorResponse = {
        type: "error",
        message: "Something went wrong, please try again later!",
      };
      setResponse(errorResponse); // Update the response state
      return errorResponse; // Return the error response
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;
