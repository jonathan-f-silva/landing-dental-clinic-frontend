import { Button, VStack } from "@chakra-ui/react";
import Footer from "../components/Footer";
import FooterConfig from "../components/FooterConfig";
import Header from "../components/Header";
import HeaderConfig from "../components/HeaderConfig";
import LocationConfig from "../components/LocationConfig";
import MainLandingConfig from "../components/MainLandingConfig";
import { useConfig } from "../contexts/ConfigContext";
import { saveConfig } from "../contexts/configReducer";
import { Form } from "react-router-dom";

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const config = JSON.parse(formData.get("config") as string);
  return saveConfig(config);
}

function Dashboard() {
  const config = useConfig();
  return (
    <>
      <Header title="Dashboard" links={config.header.links} />
      <VStack
        as={Form}
        method="post"
        spacing={4}
        maxWidth="60ch"
        width="90%"
        alignItems="stretch"
      >
        <HeaderConfig />
        <MainLandingConfig />
        <LocationConfig />
        <FooterConfig />
        <input type="hidden" name="config" value={JSON.stringify(config)} />
        <Button type="submit">Salvar alterações</Button>
      </VStack>
      <Footer {...config.footer} />
    </>
  );
}

export default Dashboard;
