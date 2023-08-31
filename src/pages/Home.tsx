import { useContext } from "react";
import { VStack } from "@chakra-ui/react";
import { ConfigContext } from "../contexts/ConfigContext.tsx";
import Contact from "../components/Contact";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header";
import Location from "../components/Location";
import MainLanding from "../components/MainLanding";

function Home() {
  const config = useContext(ConfigContext);
  return (
    <VStack direction="column" alignItems="center" spacing={4}>
      <Header {...config.header} />
      <MainLanding {...config.mainLanding} />
      <Contact />
      <Location {...config.location} />
      <Footer {...config.footer} />
    </VStack>
  );
}

export default Home;
