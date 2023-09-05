import { HStack, Heading, Stack } from "@chakra-ui/react";
import { Config } from "../contexts/configReducer";
import RenderedLink from "./RenderedLink";

function Header({ title, links }: Config["header"]) {
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
        {links?.map((link) => (
          <RenderedLink key={link.href} href={link.href}>
            {link.description}
          </RenderedLink>
        ))}
      </HStack>
    </Stack>
  );
}

export default Header;
