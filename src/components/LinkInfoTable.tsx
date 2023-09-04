import { Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { LinkInfo } from "../contexts/configReducer";
import LinkInfoRow from "./LinkInfoRow";

type LinkInfoTableProps = {
  links?: LinkInfo[];
};

function LinkInfoTable({ links }: LinkInfoTableProps) {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Descrição</Th>
          <Th>Endereço</Th>
          <Th>Remover link</Th>
        </Tr>
      </Thead>
      <Tbody>{links?.map((link) => <LinkInfoRow link={link} />)}</Tbody>
    </Table>
  );
}
export default LinkInfoTable;
