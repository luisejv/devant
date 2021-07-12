import Head from "next/head";
import AboutSection from "../components/AboutSection";
import CallToActionSection from "../components/CallToActionSection";
import ClientsSection from "../components/ClientsSection";
import ContactSection from "../components/ContactSection";
import CountsSection from "../components/CountsSection";
import FeaturesSection from "../components/FeaturesSection";
import HeroSection from "../components/HeroSection";
import PortfolioSection from "../components/PortfolioSection";
import ServicesSection from "../components/ServicesSection";
import TeamSection from "../components/TeamSection";
import Testimonials from "../components/Testimonials";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Devant</title>
      </Head>
      <a href="#" className="back-to-top">
        <i className="ri-arrow-up-line"></i>
      </a>
      {/* <div id="preloader"></div> */}
      <div>
        <HeroSection />

        <main id="main">
          <AboutSection />
          <ClientsSection />
          <FeaturesSection />
          <ServicesSection />
          <CallToActionSection />
          <PortfolioSection />
          <CountsSection />
          <Testimonials />
          <TeamSection />
          <ContactSection />
        </main>
      </div>
    </>
  );
}
