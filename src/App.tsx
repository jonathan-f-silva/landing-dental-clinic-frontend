import { Flex } from "@chakra-ui/react";
import Header from "./components/Header";
import MainLanding from "./components/MainLanding";
import Contact from "./components/Contact";

function App() {
  return (
    <Flex direction="column" alignItems="center">
      <Header />
      <MainLanding />
      <Contact />
    </Flex>
  );
}

export default App;
