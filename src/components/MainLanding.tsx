import { Link, Image, Stack, Text, VStack, Button } from "@chakra-ui/react";
import dentistImage from "../assets/dentist-sample.png";

function MainLanding() {
  return (
    <Stack
      as="main"
      direction={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="space-around"
      maxWidth="container.lg"
    >
      <Image src={dentistImage} rounded={10} margin={4} />
      <VStack>
        <Text padding={10}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore..
        </Text>
        <Stack direction={{ base: "column", lg: "row" }}>
          <Link href="#contact">
            <Button>Entre em contato</Button>
          </Link>
          <Link href="#location">
            <Button>Onde estamos</Button>
          </Link>
        </Stack>
      </VStack>
    </Stack>
  );
}

export default MainLanding;
