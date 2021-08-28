import React from 'react';
import FormContact from './Form/FormContact';
const ContactSection = () => {
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p>Contacto</p>
        </div>

        {/* <div>
          <iframe
            style={{ border: "0", width: "100%", height: "270px" }}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div> */}

        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="icofont-google-map"></i>
                <h4>Ubicación:</h4>
                <p>Calle Osa Mayor 240 - Surco - Lima, Perú</p>
              </div>

              <div className="email">
                <i className="icofont-envelope"></i>
                <h4>Email:</h4>
                <p>devant@devant.pe</p>
              </div>

              <div className="phone">
                <i className="icofont-phone"></i>
                <h4>Telf:</h4>
                <p>+51 968 201 380</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">
            <FormContact />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
