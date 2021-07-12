import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div
            className="col-lg-6 order-1 order-lg-2"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="assets/img/about.jpg" className="img-fluid" alt="" />
          </div>
          <div
            className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h3>Tú lo piensas, nosotros lo hacemos.</h3>
            <p className="font-italic">
              Somos tus aliados tecnológicos. Nos especializamos en aterrizar y
              desarrollar tu idea. Desde aplicaciones web hasta móviles, cuentas
              con nosotros para lo que se te ocurra.
            </p>
            <ul>
              <li>
                <i className="ri-check-double-line"></i> Trabajamos con las
                últimas tecnologías del mercado.
              </li>
              <li>
                <i className="ri-check-double-line"></i> Ofrecemos soluciones
                escalables para todo tipo de problemas.
              </li>
              <li>
                <i className="ri-check-double-line"></i> Trato cercano y
                contínuo a lo largo de todo el proceso de desarrollo.
              </li>
            </ul>
            <p>
              ¡Confía en nosotros tu innovación tecnológica y déjate sorprender
              por el resultado que juntos lograremos!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
