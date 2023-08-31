import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/index.tsx";
import Home from "./pages/Home.tsx";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  );
}

export default App;
