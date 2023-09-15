import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Config } from "../contexts/configReducer";
import MapEmbed from "./MapEmbed";

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
          <MapEmbed title="Localização da clínica no mapa" src={href} />
          <Text>{description}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default Location;
