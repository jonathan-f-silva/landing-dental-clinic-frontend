import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

function Contact() {
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
          Entre em contato!
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
          <FormControl>
            <FormLabel>Telefone</FormLabel>
            <Input
              type="tel"
              placeholder="Telefone"
              {...register("phone", { required: true })}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Mensagem</FormLabel>
            <Textarea
              placeholder="Mensagem"
              {...register("message", { required: true })}
            />
          </FormControl>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button isDisabled={isSubmitDisabled} type="submit" colorScheme="teal">
          Enviar
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Contact;
