import { useConfig } from "../contexts/ConfigContext.tsx";
import Contact from "../components/Contact";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header";
import Location from "../components/Location";
import MainLanding from "../components/MainLanding";

function Home() {
  const config = useConfig();
  return (
    <>
      <Header {...config.header} />
      <MainLanding {...config.mainLanding} />
      <Contact />
      <Location {...config.location} />
      <Footer {...config.footer} />
    </>
  );
}

export default Home;
