import { Button, Heading, Input, Stack } from "@chakra-ui/react";

function SignUp() {
  return (
    <Stack maxWidth={"60ch"}>
      <Heading as={"h3"} size={"lg"}>
        Cadastre-se
      </Heading>
      <Input placeholder="Nome" />
      <Input placeholder="E-mail" />
      <Button>Cadastrar</Button>
    </Stack>
  );
}

export default SignUp;
