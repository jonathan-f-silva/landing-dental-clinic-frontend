import {
  Card,
  CardBody,
  CardHeader,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Switch,
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
        <FormControl>
          <FormLabel>Banner</FormLabel>
          <Input type="file" name="banner" />
        </FormControl>
        <FormControl display="flex" alignItems="center">
          <FormLabel mb="0">Adicionar botões para as seções</FormLabel>
          <Switch />
        </FormControl>
        <FormControl></FormControl>
      </CardBody>
    </Card>
  );
}
export default MainLandingConfig;
