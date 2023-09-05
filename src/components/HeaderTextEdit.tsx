import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useConfig, useConfigDispatch } from "../contexts/ConfigContext";

function HeaderTextEdit() {
  const { header } = useConfig();
  const dispatch = useConfigDispatch();

  function handleTitleChange(title: string) {
    dispatch({
      type: "setHeader",
      payload: { title },
    });
  }

  return (
    <FormControl>
      <FormLabel>Título</FormLabel>
      <Input
        placeholder="Título do cabeçalho"
        value={header.title}
        onChange={(e) => handleTitleChange(e.target.value)}
      />
    </FormControl>
  );
}
export default HeaderTextEdit;
