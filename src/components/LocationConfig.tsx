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
import { isValidEmbed, parseSrcFromEmbed } from "../utils";

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
            onChange={(ev) => {
              if (isValidEmbed(ev.target.value)) {
                console.log(
                  `Alterando para ${parseSrcFromEmbed(ev.target.value)}`,
                );
                dispatch({
                  type: "setLocation",
                  payload: { href: parseSrcFromEmbed(ev.target.value) },
                });
              }
            }}
          />
          <MapEmbed src={location.href} />
        </FormControl>
        <FormControl>
          <FormLabel>Descrição</FormLabel>
          <Textarea
            placeholder="Descrição da localização"
            value={location.description}
            onChange={(ev) => {
              dispatch({
                type: "setLocation",
                payload: { description: ev.target.value },
              });
            }}
          />
        </FormControl>
      </CardBody>
    </Card>
  );
}
export default LocationConfig;
