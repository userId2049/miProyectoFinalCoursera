import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      backgroundColor="white" // Fondo blanco para mayor contraste
      borderRadius="lg" // Bordes redondeados
      overflow="hidden" // Ocultar contenido que exceda los bordes
      boxShadow="lg" // Sombra predeterminada
      align="stretch"
      spacing={4}
      _hover={{
        transform: "scale(1.05)", // Escala la tarjeta ligeramente
        boxShadow: "xl", // Añade una sombra más intensa
        transition: "all 0.3s ease-in-out", // Transición suave para animación
      }}
    >
      {/* Imagen del proyecto */}
      <Image
        src={imageSrc}
        alt={title}
        objectFit="cover"
        _hover={{
          opacity: 0.9, // Reduce ligeramente la opacidad al hacer hover
          transition: "opacity 0.3s ease-in-out", // Transición suave para la opacidad
        }}
      />

      {/* Contenido de la tarjeta */}
      <VStack align="start" p={4} spacing={2}>
        <Heading as="h3" size="md" color="black">
          {title} {/* Color del título en negro */}
        </Heading>
        <Text fontSize="sm" color="gray.700">
          {description} {/* Texto de descripción en gris */}
        </Text>
        <HStack spacing={2} align="center">
          <Text fontSize="sm" fontWeight="bold" color="teal.500">
            Aprende más
          </Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color="teal" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
