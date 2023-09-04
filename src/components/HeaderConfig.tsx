import {
  Card,
  CardBody,
  CardHeader,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import LinkInfoTable from "./LinkInfoTable";
import { useConfig } from "../contexts/ConfigContext";

function HeaderConfig() {
  const { header } = useConfig();
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
        <LinkInfoTable links={header.links} />
      </CardBody>
    </Card>
  );
}
export default HeaderConfig;
