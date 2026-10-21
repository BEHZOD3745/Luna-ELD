import { useEffect } from "react";


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
    useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: no-preference)").matches || !('IntersectionObserver' in window)) return;

    const sections = document.querySelectorAll<HTMLElement>("main > section:not(.hero), footer");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("scroll-reveal-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.06, rootMargin: "0px 0px -5% 0px" });

    sections.forEach((section) => {
      section.classList.add("scroll-reveal-ready");
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
      sections.forEach((section) => {
        section.classList.remove("scroll-reveal-ready", "scroll-reveal-visible");
      });
    };
  }, []);
  

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