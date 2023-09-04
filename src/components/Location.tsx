import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Config } from "../contexts/configReducer";

function Location({ href, description }: Config["location"]) {
  return (
    <Card maxWidth="60ch" width="90%">
      <CardHeader>
        <Heading id="location" color="teal" as={"h3"} size="lg">
          Localização
        </Heading>
      </CardHeader>
      <CardBody>
        <Stack direction={{ base: "column", md: "row" }}>
          <iframe
            title="Localização da clínica no mapa"
            src={href}
            loading="lazy"
            width="100%"
          ></iframe>
          <Text>{description}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default Location;
