import React, { useState, useEffect } from "react";
import { Box, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const [showHeader, setShowHeader] = useState(true); // Controla si el encabezado es visible
  const [lastScrollY, setLastScrollY] = useState(0); // Almacena la posición anterior del desplazamiento

  // Manejador de desplazamiento
  const handleScroll = () => {
    const currentScrollY = window.scrollY; // Obtiene la posición actual del desplazamiento
    if (currentScrollY > lastScrollY) {
      setShowHeader(false); // Oculta el encabezado al desplazarse hacia abajo
    } else {
      setShowHeader(true); // Muestra el encabezado al desplazarse hacia arriba
    }
    setLastScrollY(currentScrollY); // Actualiza la posición del desplazamiento
  };

  useEffect(() => {
    // Agrega el evento de desplazamiento
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Limpia el evento de desplazamiento
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={showHeader ? "translateY(0)" : "translateY(-200px)"} // Animación de mostrar/ocultar
      transition="transform 0.3s ease-in-out" // Transición suave
      backgroundColor="#18181b"
      zIndex={9999} // Asegura que el encabezado esté sobre otros elementos
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack px={16} py={4} justifyContent="space-between" alignItems="center">
          {/* Enlaces de redes sociales */}
          <nav>
            <HStack spacing={4}>
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              ))}
            </HStack>
          </nav>

          {/* Enlaces internos */}
          <nav>
            <HStack spacing={8}>
              <a href="#projects-section">Projects</a>
              <a href="#contactme-section">Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
