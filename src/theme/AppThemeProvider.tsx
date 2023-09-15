import {
  ChakraProvider,
  baseTheme,
  extendTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";
import { useConfig } from "../contexts/ConfigContext";

function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const {
    theme: { brandColor },
  } = useConfig();
  const color = baseTheme.colors[brandColor];
  const theme = extendTheme(
    {
      colors: {
        brand: {
          50: color[50],
          100: color[100],
          200: color[200],
          300: color[300],
          400: color[400],
          500: color[500],
          600: color[600],
          700: color[700],
          800: color[800],
          900: color[900],
        },
      },
    },
    withDefaultColorScheme({
      colorScheme: "brand",
    }),
  );
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}

export default AppThemeProvider;
