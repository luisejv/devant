/* eslint-disable @next/next/no-img-element */
import React from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel"), {
  ssr: false,
});

const ClientsSection = () => {
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
          <img
            width="400"
            height="50"
            src="assets/img/clients/react.png"
            alt=""
          />
          <img
            width="400"
            height="50"
            src="assets/img/clients/angular.png"
            alt=""
          />
          <img
            width="400"
            height="50"
            src="assets/img/clients/vuejs.jpg"
            alt=""
          />
          <img
            width="400"
            height="50"
            src="assets/img/clients/next.png"
            alt=""
          />
          <img
            width="800"
            height="50"
            src="assets/img/clients/node.png"
            alt=""
          />
          <img
            width="400"
            height="50"
            src="assets/img/clients/nest.png"
            alt=""
          />
          <img
            width="400"
            height="50"
            src="assets/img/clients/spring.png"
            alt=""
          />
          <img
            width="400"
            height="50"
            src="assets/img/clients/flutter.png"
            alt=""
          />
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
