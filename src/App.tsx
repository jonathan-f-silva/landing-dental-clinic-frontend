import { Container } from "@chakra-ui/react";
import Header from "./components/Header";
import MainLanding from "./components/MainLanding";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Container maxWidth={"80vw"}>
      <Header />
      <MainLanding />
      <SignUp />
    </Container>
  );
}

export default App;
