import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

type LocationProps = {
  googleMapsUrl: string;
};

function Location({ googleMapsUrl }: LocationProps) {
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
            src={googleMapsUrl}
            loading="lazy"
            width="100%"
          ></iframe>
          <Text>
            Rua 15 de Novembro, 1234
            <br />
            Centro
            <br />
            Iacanga/SP
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default Location;
