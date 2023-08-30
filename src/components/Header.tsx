import { Link, HStack, Heading, Stack } from "@chakra-ui/react";

type LinkData = {
  href: string;
  description: string;
};

type HeaderProps = {
  title: string;
  additionalLinks?: LinkData[];
};

function Header({ title, additionalLinks }: HeaderProps) {
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
      <Heading>{title}</Heading>
      <HStack as="nav" spacing={4}>
        <Link key="#contact" href="#contact">
          Contato
        </Link>
        <Link key="#location" href="#location">
          Localização
        </Link>
        {additionalLinks?.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.description}
          </Link>
        ))}
      </HStack>
    </Stack>
  );
}

export default Header;
