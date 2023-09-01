import {
  Card,
  CardBody,
  CardHeader,
  FormControl,
  FormLabel,
  Heading,
  Textarea,
} from "@chakra-ui/react";

function MainLandingConfig() {
  return (
    <Card>
      <CardHeader>
        <Heading>Principal</Heading>
      </CardHeader>
      <CardBody>
        <FormControl>
          <FormLabel>Introdução</FormLabel>
          <Textarea placeholder="Texto de introdução" />
        </FormControl>
      </CardBody>
    </Card>
  );
}
export default MainLandingConfig;
