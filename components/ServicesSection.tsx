import React from "react";

const ServicesSection = () => {
  return (
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Services</h2>
          <p>Nuestros Servicios</p>
        </div>

        <div className="row">
          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-trim"></i>
              </div>
              <h4>
                <a href="">Páginas Web</a>
              </h4>
              <p>
                Landing pages y webs interactivas. ¡Déjate sorprender por el
                estilo que puede llegar a tener tu página!
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-credit-card"></i>
              </div>
              <h4>
                <a href="">e-Commerce</a>
              </h4>
              <p>
                Dale a tu negocio ese empujón que necesita para llegar a más
                personas y manejar mejor tus productos.
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bxs-institution"></i>
              </div>
              <h4>
                <a href="">Intranet/ERP</a>
              </h4>
              <p>
                Estamos capacitados para realizar desarrollos de aplicaciones
                internas de gran escala.
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-mobile"></i>
              </div>
              <h4>
                <a href="">Aplicativos Móviles</a>
              </h4>
              <p>
                Desarrollamos apps móviles de gran calidad, adaptables a todas
                las necesidades y plataformas.
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-laptop"></i>
              </div>
              <h4>
                <a href="">Aplicaciones de Escritorio</a>
              </h4>
              <p>
                ¿Necesitas ese software que funcione en toda tu red de trabajo?
                Pues no busques más, he aquí la solución.
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-cloud-upload"></i>
              </div>
              <h4>
                <a href="">Servidores/Buckets</a>
              </h4>
              <p>
                ¿Quieres tener un sistema integrado que maneje la lógica de tu
                negocio, almacene tus archivos sensibles y pueda ser consultado
                desde diferentes dispositivos al mismo tiempo? Lo hacemos y en
                la nube ;)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
