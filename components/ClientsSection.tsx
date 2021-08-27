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
          {/* <img
            width="400"
            height="50"
            src="assets/img/clients/react.png"
            alt="Reactjs"
          />
          <img
            width="400"
            height="50"
            src="assets/img/clients/angular.png"
            alt="Angular"
          />
          <img
            width="100"
            height="50"
            src="assets/img/clients/vue.png"
            alt="Vuejs"
          />
          <img
            width="400"
            height="50"
            src="assets/img/clients/next.png"
            alt="Nextjs"
          />
          <img
            width="800"
            height="40"
            src="assets/img/clients/Nodejs.png"
            alt="Nodejs"
          />
          <img
            width="400"
            height="50"
            src="assets/img/clients/nest.png"
            alt="Nestjs"
          />
          <img
            width="400"
            height="60"
            src="assets/img/clients/spring.png"
            alt="SpringBoot"
          />
          <img
            width="400"
            height="50"
            src="assets/img/clients/flutter.jpeg"
            alt="Flutter"
          />
          <img
            width="400"
            height="50"
            src="assets/img/clients/graphql.png"
            alt="GraphQL"
          />
          <img
            width="400"
            height="50"
            src="assets/img/clients/postgresql2.png"
            alt="PostgreSQL"
          />
          <img
            width="400"
            height="60"
            src="assets/img/clients/mongo.png"
            alt="MongoDB"
          /> */}

          {/* <img src="assets/img/clients/client-1.png" alt="" />
          <img src="assets/img/clients/client-2.png" alt="" />
          <img src="assets/img/clients/client-3.png" alt="" />
          <img src="assets/img/clients/client-4.png" alt="" />
          <img src="assets/img/clients/client-5.png" alt="" />
          <img src="assets/img/clients/client-6.png" alt="" />
          <img src="assets/img/clients/client-7.png" alt="" />
          <img src="assets/img/clients/client-8.png" alt="" /> */}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default ClientsSection;
