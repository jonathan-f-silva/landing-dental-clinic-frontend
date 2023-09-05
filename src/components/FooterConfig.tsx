import {
  Card,
  CardBody,
  CardHeader,
  FormControl,
  FormLabel,
  Heading,
  Textarea,
} from "@chakra-ui/react";
import { useConfig, useConfigDispatch } from "../contexts/ConfigContext";

function FooterConfig() {
  const { footer } = useConfig();
  const dispatch = useConfigDispatch();
  return (
    <Card>
      <CardHeader>
        <Heading>Rodapé</Heading>
      </CardHeader>
      <CardBody>
        <FormControl>
          <FormLabel>Texto</FormLabel>
          <Textarea
            placeholder="Texto do rodapé"
            value={footer.text}
            onChange={(ev) =>
              dispatch({
                type: "setFooter",
                payload: { text: ev.target.value },
              })
            }
          />
        </FormControl>
      </CardBody>
    </Card>
  );
}
export default FooterConfig;
