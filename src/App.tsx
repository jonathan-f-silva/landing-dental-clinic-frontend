import { Container } from "@chakra-ui/react";
import Header from "./components/Header";
import MainLanding from "./components/MainLanding";

function App() {
  return (
    <Container maxWidth={"80vw"}>
      <Header />
      <MainLanding />
    </Container>
  );
}

export default App;
