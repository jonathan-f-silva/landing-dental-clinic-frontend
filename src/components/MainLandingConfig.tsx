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
import { useConfig, useConfigDispatch } from "../contexts/ConfigContext";

function MainLandingConfig() {
  const { mainLanding } = useConfig();
  const dispatch = useConfigDispatch();

  return (
    <Card>
      <CardHeader>
        <Heading>Principal</Heading>
      </CardHeader>
      <CardBody>
        <FormControl>
          <FormLabel>Introdução</FormLabel>
          <Textarea
            placeholder="Texto de introdução"
            value={mainLanding.introText}
            onChange={(ev) =>
              dispatch({
                type: "setMainLanding",
                payload: { introText: ev.target.value },
              })
            }
          />
        </FormControl>
        <FormControl>
          <FormLabel>Banner</FormLabel>
          <Input type="file" name="banner" />
        </FormControl>
        <FormControl display="flex" alignItems="center">
          <FormLabel mb="0">Adicionar botões para as seções</FormLabel>
          <Switch
            isChecked={mainLanding.addSectionButtons}
            onChange={(ev) => {
              console.log(ev.target.checked);
              dispatch({
                type: "setMainLanding",
                payload: { addSectionButtons: ev.target.checked },
              });
            }}
          />
        </FormControl>
        <FormControl></FormControl>
      </CardBody>
    </Card>
  );
}
export default MainLandingConfig;
