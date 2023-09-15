import { useConfig } from "../contexts/ConfigContext.tsx";
import Contact from "../components/Contact.tsx";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import Location from "../components/Location.tsx";
import MainLanding from "../components/MainLanding.tsx";

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
