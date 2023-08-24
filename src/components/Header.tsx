import { HStack, Heading, Link } from "@chakra-ui/react";

function Header() {
  return (
    <HStack as="header" justifyContent={"space-between"}>
      <Heading>Clínica Dental</Heading>
      <HStack as="nav">
        <Link href="#">Contato</Link>
        <Link href="#">Cadastre-se</Link>
      </HStack>
    </HStack>
  );
}

export default Header;
