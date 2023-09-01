import {
  Card,
  CardBody,
  CardHeader,
  FormControl,
  FormLabel,
  Heading,
  Textarea,
} from "@chakra-ui/react";

function LocationConfig() {
  return (
    <Card>
      <CardHeader>
        <Heading>Localização</Heading>
      </CardHeader>
      <CardBody>
        <FormControl>
          <FormLabel>Embed do Google Maps</FormLabel>
          <Textarea placeholder="Embed do Google Maps" />
        </FormControl>
        <FormControl>
          <FormLabel>Descrição</FormLabel>
          <Textarea placeholder="Descrição da localização" />
        </FormControl>
      </CardBody>
    </Card>
  );
}
export default LocationConfig;
