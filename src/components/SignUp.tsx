import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";

function SignUp() {
  return (
    <Card margin={4} maxWidth="60ch" rounded={10} width="90%">
      <CardHeader>
        <Heading color="teal" as={"h3"} size="lg">
          Cadastre-se
        </Heading>
      </CardHeader>
      <CardBody>
        <Stack>
          <Input placeholder="Nome" />
          <Input placeholder="E-mail" />
        </Stack>
      </CardBody>
      <CardFooter>
        <Button>Cadastrar</Button>
      </CardFooter>
    </Card>
  );
}

export default SignUp;
