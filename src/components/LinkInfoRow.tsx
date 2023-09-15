import { Icon, IconButton, Td, Tr } from "@chakra-ui/react";
import { IoTrashBin } from "react-icons/io5";
import { LinkInfo } from "../contexts/configReducer";

type LinkInfoRowProps = {
  link: LinkInfo;
  handleRemoveLink: (href: LinkInfo["href"]) => void;
};

function LinkInfoRow({ link, handleRemoveLink }: LinkInfoRowProps) {
  return (
    <Tr>
      <Td>{link.description}</Td>
      <Td>{link.href}</Td>
      <Td>
        <IconButton
          colorScheme="red"
          aria-label={`Remover link ${link.description}`}
          icon={<Icon as={IoTrashBin} />}
          onClick={() => handleRemoveLink(link.href)}
        />
      </Td>
    </Tr>
  );
}

export default LinkInfoRow;
