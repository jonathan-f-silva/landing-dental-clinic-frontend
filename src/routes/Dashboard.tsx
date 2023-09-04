import { Button, VStack } from "@chakra-ui/react";
import { Form } from "react-router-dom";
import FooterConfig from "../components/FooterConfig";
import Header from "../components/Header";
import HeaderConfig from "../components/HeaderConfig";
import LocationConfig from "../components/LocationConfig";
import MainLandingConfig from "../components/MainLandingConfig";
import Footer from "../components/Footer";
import { useConfig } from "../contexts/ConfigContext";

function Dashboard() {
  const config = useConfig();
  return (
    <>
      <Header title="Dashboard" />
      <VStack
        as={Form}
        spacing={4}
        maxWidth="60ch"
        width="90%"
        alignItems="stretch"
      >
        <HeaderConfig />
        <MainLandingConfig />
        <LocationConfig />
        <FooterConfig />
        <Button>Salvar alterações</Button>
      </VStack>
      <Footer {...config.footer} />
    </>
  );
}

export default Dashboard;
