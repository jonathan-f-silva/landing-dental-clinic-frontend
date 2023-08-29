import { Stack, Text, useColorModeValue } from "@chakra-ui/react";

function Footer() {
  return (
    <Stack
      as="footer"
      backgroundColor={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      padding={4}
      width="100%"
    >
      <Text>© 2023 Vai De Digital. Todos os direitos reservados</Text>
    </Stack>
  );
}

export default Footer;
