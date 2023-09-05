import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import LinkInfoTable from "./LinkInfoTable";
import HeaderTextEdit from "./HeaderTextEdit";

function HeaderConfig() {
  return (
    <Card>
      <CardHeader>
        <Heading>Cabeçalho</Heading>
      </CardHeader>
      <CardBody>
        <HeaderTextEdit />
        <LinkInfoTable />
      </CardBody>
    </Card>
  );
}
export default HeaderConfig;
