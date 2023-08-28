import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
};

function SignUp() {
  const { register, handleSubmit, formState } = useForm<FormData>({
    mode: "onChange",
  });

  const onSubmit = (data: FormData) => {
    // TODO: send data to server
    console.log(data);
  };

  const isSubmitDisabled = !formState.isValid;

  return (
    <Card
      as="form"
      margin={4}
      maxWidth="60ch"
      rounded={10}
      width="90%"
      onSubmit={handleSubmit(onSubmit)}
    >
      <CardHeader>
        <Heading color="teal" as={"h3"} size="lg">
          Cadastre-se
        </Heading>
      </CardHeader>
      <CardBody>
        <Stack>
          <FormControl>
            <FormLabel>Nome</FormLabel>
            <Input
              type="text"
              placeholder="Nome"
              {...register("name", { required: true })}
            />
          </FormControl>
          <FormControl>
            <FormLabel>E-mail</FormLabel>
            <Input
              type="email"
              placeholder="E-mail"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
          </FormControl>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button isDisabled={isSubmitDisabled} type="submit" colorScheme="teal">
          Cadastrar
        </Button>
      </CardFooter>
    </Card>
  );
}

export default SignUp;
