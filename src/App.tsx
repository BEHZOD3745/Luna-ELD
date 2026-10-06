import Contact from "./sections/Contact/Contact";
import Dashboard from "./sections/Dashboard/Dashboard";
import Downloads from "./sections/Downloads/Downloads";
import EldDevice from "./sections/EldDevice/EldDevice";
import FAQ from "./sections/FAQ/FAQ";
import Footer from "./sections/Footer/Footer";
import Header from "./sections/Header/Header";
import Hero from "./sections/Hero/Hero";
import Integrations from "./sections/Integrations/Integrations";
import MobileApp from "./sections/MobileApp/MobileApp";
import Pricing from "./sections/Pricing/Pricing";
import WhyPlatform from "./sections/WhyPlatform/WhyPlatform";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero/>
        <Integrations/>
        <WhyPlatform/>
        <Dashboard/>
        <MobileApp/>
        <EldDevice/>
        <Pricing/>
        <Downloads/>
        <FAQ/>
        <Contact/>
      </main>

      <Footer />
    </>
  );
}

export default App;