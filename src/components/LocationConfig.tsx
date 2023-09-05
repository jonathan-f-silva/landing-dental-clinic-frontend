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
import MapEmbed from "./MapEmbed";

function LocationConfig() {
  const { location } = useConfig();
  const dispatch = useConfigDispatch();
  return (
    <Card>
      <CardHeader>
        <Heading>Localização</Heading>
      </CardHeader>
      <CardBody>
        <FormControl>
          <FormLabel>Embed do Google Maps</FormLabel>
          <Textarea
            placeholder="Embed do Google Maps"
            onChange={(ev) =>
              dispatch({
                type: "setLocation",
                payload: { href: ev.target.value },
              })
            }
          />
          <MapEmbed src={location.href} />
        </FormControl>
        <FormControl>
          <FormLabel>Descrição</FormLabel>
          <Textarea placeholder="Descrição da localização" />
        </FormControl>
      </CardBody>
    </Card>
  );
}
export default LocationConfig;
