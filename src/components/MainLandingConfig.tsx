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
          <FormLabel htmlFor="input-main-landing-banner">Banner</FormLabel>
          <Input id="input-main-landing-banner" type="file" name="banner" />
        </FormControl>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="input-main-landing-add-extra-buttons" mb="0">
            Adicionar botões para as seções
          </FormLabel>
          <Switch id="input-main-landing-add-extra-buttons" />
        </FormControl>
        <FormControl></FormControl>
      </CardBody>
    </Card>
  );
}
export default MainLandingConfig;
