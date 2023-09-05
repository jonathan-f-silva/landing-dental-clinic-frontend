import { useState } from "react";
import { Icon, IconButton, Input, Td, Tr } from "@chakra-ui/react";
import { IoAdd } from "react-icons/io5";
import { useConfig, useConfigDispatch } from "../contexts/ConfigContext";

function LinkInfoAdd() {
  const { header } = useConfig();
  const dispatch = useConfigDispatch();
  const [description, setDescription] = useState("");
  const [href, setHref] = useState("");

  const isExistingLink = (href: string) => {
    return header.links?.some((link) => link.href === href);
  };

  const handleAddLink = (description: string, href: string) => {
    dispatch({
      type: "setHeader",
      payload: { links: [...(header.links || []), { description, href }] },
    });
    setDescription("");
    setHref("");
  };

  return (
    <Tr>
      <Td>
        <Input
          placeholder="Descrição do link"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Td>
      <Td>
        <Input
          placeholder="Endereço do link"
          value={href}
          onChange={(e) => setHref(e.target.value)}
        />
      </Td>
      <Td>
        <IconButton
          colorScheme="green"
          aria-label="Adicionar link"
          icon={<Icon as={IoAdd} />}
          onClick={() => handleAddLink(description, href)}
          isDisabled={!description || !href || isExistingLink(href)}
        />
      </Td>
    </Tr>
  );
}
export default LinkInfoAdd;
