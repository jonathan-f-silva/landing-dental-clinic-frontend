import { extendTheme, withDefaultProps } from "@chakra-ui/react";

const theme = extendTheme(
  withDefaultProps({
    defaultProps: {
      colorScheme: "teal",
    },
    components: ["Button"],
  }),
);

export default theme;
