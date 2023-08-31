import { Link, Image, Stack, Text, VStack, Button } from "@chakra-ui/react";
import { Config } from "../contexts/configReducer";

function MainLanding({
  bannerImageURL,
  introText,
  addSectionButtons,
}: Config["mainLanding"]) {
  return (
    <Stack
      as="main"
      direction={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="space-around"
      maxWidth="container.lg"
    >
      <Image src={bannerImageURL} rounded={10} margin={4} />
      <VStack>
        <Text padding={10}>{introText}</Text>
        {addSectionButtons && (
          <Stack direction={{ base: "column", lg: "row" }}>
            <Link href="#contact">
              <Button>Entre em contato</Button>
            </Link>
            <Link href="#location">
              <Button>Onde estamos</Button>
            </Link>
          </Stack>
        )}
      </VStack>
    </Stack>
  );
}

export default MainLanding;
