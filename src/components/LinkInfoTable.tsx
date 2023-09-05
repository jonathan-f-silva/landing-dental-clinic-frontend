import { Heading, Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { useConfig, useConfigDispatch } from "../contexts/ConfigContext";
import LinkInfoRow from "./LinkInfoRow";
import LinkInfoAdd from "./LinkInfoAdd";

function LinkInfoTable() {
  const { header } = useConfig();
  const dispatch = useConfigDispatch();

  function handleRemoveLink(href: string) {
    dispatch({
      type: "setHeader",
      payload: {
        links: header.links?.filter((link) => link.href !== href),
      },
    });
  }

  return (
    <>
      <Heading as="h3" size="sm" fontWeight="medium">
        Links
      </Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Descrição</Th>
            <Th>Endereço</Th>
            <Th>Remover link</Th>
          </Tr>
        </Thead>
        <Tbody>
          {header.links?.map((link) => (
            <LinkInfoRow
              key={link.href}
              link={link}
              handleRemoveLink={handleRemoveLink}
            />
          ))}
          <LinkInfoAdd />
        </Tbody>
      </Table>
    </>
  );
}
export default LinkInfoTable;
