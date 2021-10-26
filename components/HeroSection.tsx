import Image from "next/image";
import React from "react";

const HeroSection = () => {
  const images: string[] = [
    "/assets/img/clientes/aprendercreando.png",
    "/assets/img/clientes/psicotrec.png",
    "/assets/img/clientes/comite.png",
    "/assets/img/clientes/clicker.png",
    "/assets/img/clientes/roche.png",
  ];

  const alts: string[] = [
    "Aprender Creando",
    "Psicotrec",
    "Comité de Lectura",
    "Clicker",
    "Roche",
  ];

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
              tu futuro<span>.</span>
            </h1>
          </div>
        </div>

        <div
          className="row mt-5 justify-content-center"
          data-aos="zoom-in"
          data-aos-delay="250"
        >
          {images.map((imageSrc: string, idx: number) => {
            return (
              <div key={idx} className="col-xl-2 col-md-4 col-6 my-1">
                <div className="icon-box client-container">
                  <Image
                    className="contain-image"
                    width="100"
                    height="100"
                    src={imageSrc}
                    alt={alts[idx]}
                  />
                  <h3>
                    <a href="">{alts[idx]}</a>
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
