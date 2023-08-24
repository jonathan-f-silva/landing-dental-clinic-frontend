import { HStack, Heading, Link, Stack } from "@chakra-ui/react";

function Header() {
  return (
    <Stack
      as="header"
      justifyContent={"space-between"}
      direction={{ base: "column", md: "row" }}
    >
      <Heading>Clínica Dental</Heading>
      <HStack as="nav">
        <Link href="#">Contato</Link>
        <Link href="#">Cadastre-se</Link>
      </HStack>
    </Stack>
  );
}

export default Header;
