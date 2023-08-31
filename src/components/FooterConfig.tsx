import {
  Card,
  CardBody,
  CardHeader,
  FormControl,
  FormLabel,
  Heading,
  Textarea,
} from "@chakra-ui/react";

function FooterConfig() {
  return (
    <Card>
      <CardHeader>
        <Heading>Rodapé</Heading>
      </CardHeader>
      <CardBody>
        <FormControl>
          <FormLabel>Texto</FormLabel>
          <Textarea placeholder="Texto do rodapé" />
        </FormControl>
      </CardBody>
    </Card>
  );
}
export default FooterConfig;
