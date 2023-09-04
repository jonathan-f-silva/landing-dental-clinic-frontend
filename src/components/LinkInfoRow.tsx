import { Icon, IconButton, Td, Tr } from "@chakra-ui/react";
import { IoTrashBin } from "react-icons/io5";
import { LinkInfo } from "../contexts/configReducer";

function LinkInfoRow({ link }: { link: LinkInfo }) {
  return (
    <Tr>
      <Td>{link.description}</Td>
      <Td>{link.href}</Td>
      <Td>
        <IconButton
          colorScheme="red"
          aria-label={`Remover link ${link.description}`}
          icon={<Icon as={IoTrashBin} />}
        />
      </Td>
    </Tr>
  );
}

export default LinkInfoRow;
