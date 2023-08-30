import { ChakraProvider, VStack } from "@chakra-ui/react";
import Header from "./components/Header";
import MainLanding from "./components/MainLanding";
import Contact from "./components/Contact";
import Location from "./components/Location";
import theme from "./theme/index.tsx";
import Footer from "./components/Footer.tsx";
import dentistImage from "./assets/dentist-sample.png";

const config = {
  footer: {
    text: "© 2023 Vai De Digital! Todos os direitos reservados",
  },
  location: {
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29616.581628772714!2d-49.04017319972907!3d-21.893275947826538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf2202ab90eea3%3A0xb2c6adaca91d8c19!2sIacanga%2C%20SP%2C%2017180-000!5e0!3m2!1spt-BR!2sbr!4v1693317059093!5m2!1spt-BR!2sbr",
    description: " Rua 15 de Novembro, 1234 - Centro - Iacanga/SP",
  },
  mainLanding: {
    bannerImageURL: dentistImage,
    introText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..",
    addSectionButtons: true,
  },
  header: {
    title: "Clínica Odontológica",
    additionalLinks: [],
  },
};

function App() {
  return (
    <ChakraProvider theme={theme}>
      <VStack direction="column" alignItems="center" spacing={4}>
        <Header {...config.header} />
        <MainLanding {...config.mainLanding} />
        <Contact />
        <Location {...config.location} />
        <Footer {...config.footer} />
      </VStack>
    </ChakraProvider>
  );
}

export default App;
