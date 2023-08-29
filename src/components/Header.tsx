import { Link, HStack, Heading, Stack } from "@chakra-ui/react";

function Header() {
  return (
    <Stack
      as="header"
      justifyContent={"space-between"}
      direction={{ base: "column", sm: "row" }}
      padding={4}
      backgroundColor="teal.500"
      color="white"
      width="100%"
    >
      <Heading>Clínica Odontológica</Heading>
      <HStack as="nav" spacing={4}>
        <Link href="#">Contato</Link>
        <Link href="#">Localização</Link>
      </HStack>
    </Stack>
  );
}

export default Header;
