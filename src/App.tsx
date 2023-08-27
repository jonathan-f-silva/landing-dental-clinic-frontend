import { Flex } from "@chakra-ui/react";
import Header from "./components/Header";
import MainLanding from "./components/MainLanding";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Flex direction="column" alignItems="center">
      <Header />
      <MainLanding />
      <SignUp />
    </Flex>
  );
}

export default App;
