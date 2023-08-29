import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

function Location() {
  return (
    <Card>
      <CardHeader>
        <Heading color="teal" as={"h3"} size="lg">
          Localização
        </Heading>
      </CardHeader>
      <CardBody>
        <Stack direction={{ base: "column", md: "row" }}>
          <iframe
            title="Localização da clínica no mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29616.581628772714!2d-49.04017319972907!3d-21.893275947826538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf2202ab90eea3%3A0xb2c6adaca91d8c19!2sIacanga%2C%20SP%2C%2017180-000!5e0!3m2!1spt-BR!2sbr!4v1693317059093!5m2!1spt-BR!2sbr"
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
