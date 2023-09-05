import { Button, VStack } from "@chakra-ui/react";
import Footer from "../components/Footer";
import FooterConfig from "../components/FooterConfig";
import Header from "../components/Header";
import HeaderConfig from "../components/HeaderConfig";
import LocationConfig from "../components/LocationConfig";
import MainLandingConfig from "../components/MainLandingConfig";
import { useConfig } from "../contexts/ConfigContext";

function Dashboard() {
  const config = useConfig();
  return (
    <>
      <Header title="Dashboard" links={...config.header.links} />
      <VStack spacing={4} maxWidth="60ch" width="90%" alignItems="stretch">
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
