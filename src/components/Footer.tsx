import { Stack, Text } from "@chakra-ui/react";

type FooterProps = {
  text: string;
};

function Footer({ text }: FooterProps) {
  return (
    <Stack as="footer" padding={4} width="100%">
      <Text>{text}</Text>
    </Stack>
  );
}

export default Footer;
