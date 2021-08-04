import React from "react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="d-flex align-items-center justify-content-center"
    >
      <div className="container" data-aos="fade-up">
        <div
          className="row justify-content-center"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div className="col-xl-6 col-lg-8">
            <h1>
              Nuestra tecnología<span>,</span> <br />
              Tu futuro <span>.</span>
            </h1>
          </div>
        </div>

        <div
          className="row mt-5 justify-content-center"
          data-aos="zoom-in"
          data-aos-delay="250"
        >
          <div className="col-xl-2 col-md-4 col-6">
            <div className="icon-box">
              <i className="ri-store-line"></i>
              <h3>
                <a href="">Roche</a>
              </h3>
            </div>
          </div>
          <div className="col-xl-2 col-md-4 col-6 ">
            <div className="icon-box">
              <i className="ri-bar-chart-box-line"></i>
              <h3>
                <a href="">Comité de Lectura</a>
              </h3>
            </div>
          </div>
          <div className="col-xl-2 col-md-4 col-6 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="ri-calendar-todo-line"></i>
              <h3>
                <a href="">Clicker</a>
              </h3>
            </div>
          </div>
          <div className="col-xl-2 col-md-4 col-6 mt-4 mt-xl-0">
            <div className="icon-box">
              <i className="ri-paint-brush-line"></i>
              <h3>
                <a href="">Psicotrec</a>
              </h3>
            </div>
          </div>
          <div className="col-xl-2 col-md-4 col-6 mt-4 mt-xl-0">
            <div className="icon-box">
              <i className="ri-database-2-line"></i>
              <h3>
                <a href="">Aprender Creando</a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
