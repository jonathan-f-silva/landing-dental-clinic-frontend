import { Button, Image, Stack, Text, VStack } from "@chakra-ui/react";
import dentistImage from "../assets/dentist-sample.png";

function MainLanding() {
  return (
    <Stack as="main" direction={{ base: "column", md: "row" }}>
      {/* TODO: Change Placeholder image */}
      <Image src={dentistImage} rounded={10} />
      <VStack>
        <Text padding={10}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore..
        </Text>
        <Stack direction={{ base: "column", sm: "row" }}>
          <Button>Entre em contato</Button>
          <Button>Agende sua consulta</Button>
        </Stack>
      </VStack>
    </Stack>
  );
}

export default MainLanding;
