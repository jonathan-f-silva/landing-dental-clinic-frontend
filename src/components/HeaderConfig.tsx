import {
  Card,
  CardBody,
  CardHeader,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";

function HeaderConfig() {
  return (
    <Card>
      <CardHeader>
        <Heading>Cabeçalho</Heading>
      </CardHeader>
      <CardBody>
        <FormControl>
          <FormLabel>Título</FormLabel>
          <Input placeholder="Título do cabeçalho" />
        </FormControl>
      </CardBody>
    </Card>
  );
}
export default HeaderConfig;
