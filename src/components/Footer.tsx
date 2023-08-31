import { Stack, Text } from "@chakra-ui/react";
import { Config } from "../contexts/configReducer";

function Footer({ text }: Config["footer"]) {
  return (
    <Stack as="footer" padding={4} width="100%">
      <Text>{text}</Text>
    </Stack>
  );
}

export default Footer;
