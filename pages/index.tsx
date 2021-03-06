import Head from "next/head";
import AboutSection from "@components/AboutSection";
import CallToActionSection from "@components/CallToActionSection";
import ClientsSection from "@components/ClientsSection";
import ContactSection from "@components/ContactSection/ContactSection";
import CountsSection from "@components/CountsSection";
import FeaturesSection from "@components/FeaturesSection";
import HeroSection from "@components/HeroSection";
import PortfolioSection from "@components/PortfolioSection";
import ServicesSection from "@components/ServicesSection";
import TeamSection from "@components/TeamSection";
import Testimonials from "@components/Testimonials";
import styles from "@styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Devant</title>
        <meta
          name="description"
          content="Somos tus aliados tecnológicos. Nos especializamos en aterrizar y desarrollar tu idea. Desde aplicaciones web hasta móviles, cuentas con nosotros para lo que se te ocurra."
        />
        <meta
          name="keywords"
          content="devant, devant peru, app moviles, app moviles peru, paginas web, paginas web peru"
        />
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
          {/* TODO: Ponerle titulo de la parte de servicios y poner los 4 servicios */}
          {/* <FeaturesSection /> */}
          {/* Poner las tecnologias que usamos */}
          <ServicesSection />
          {/* TODO: Integracion con Calendly */}
          {/* <CallToActionSection /> */}
          {/* <PortfolioSection /> */}
          {/* <CountsSection /> */}
          {/* TODO: Agregar testimonios */}
          {/* <Testimonials /> */}
          {/* <TeamSection /> */}
          <ContactSection />
        </main>
      </div>
    </>
  );
}
