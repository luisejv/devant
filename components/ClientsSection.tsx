/* eslint-disable @next/next/no-img-element */
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const OwlCarousel = dynamic(import("react-owl-carousel"), {
  ssr: false,
});

const ClientsSection = () => {
  const images: string[] = [
    "/assets/img/clients/react.png",
    "/assets/img/clients/angular.png",
    "/assets/img/clients/vue.png",
    "/assets/img/clients/next.png",
    "/assets/img/clients/Nodejs.png",
    "/assets/img/clients/nest.png",
    "/assets/img/clients/spring.png",
    "/assets/img/clients/flutter.jpeg",
    "/assets/img/clients/graphql.png",
    "/assets/img/clients/postgresql2.png",
    "/assets/img/clients/mongo.png",
  ];
  const alts: string[] = [
    "Reactjs",
    "Angular",
    "Vuejs",
    "Nextjs",
    "Nodejs",
    "Nestjs",
    "SpringBoot",
    "Flutter",
    "GraphQL",
    "PostgreSQL",
    "MongoDB",
  ];

  return (
    <section id="clients" className="clients">
      <div className="container" data-aos="zoom-in">
        <OwlCarousel
          className="owl-carousel"
          autoplay
          dots
          loop
          responsive={{
            0: { items: 2 },
            768: {
              items: 4,
            },
            900: {
              items: 6,
            },
          }}
        >
          {images.map((imageSrc: string, idx: number) => {
            return (
              <img
                key={idx}
                className="contain-image"
                width="400"
                height="150"
                src={imageSrc}
                alt={alts[idx]}
              />
            );
          })}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default ClientsSection;
