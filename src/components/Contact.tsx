import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Switch,
  Textarea,
} from "@chakra-ui/react";
import { Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  prefersWhatsapp?: boolean;
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
      maxWidth="60ch"
      rounded={10}
      width="90%"
      onSubmit={handleSubmit(onSubmit)}
    >
      <CardHeader>
        <Heading id="contact" color="teal" as={"h3"} size="lg">
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
          <FormControl display="flex" alignItems="center">
            <FormLabel mb="0">Prefere contato por WhatsApp?</FormLabel>
            <Switch {...register("prefersWhatsapp", { required: false })} />
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
