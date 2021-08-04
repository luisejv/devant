import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-info">
                {/* <h3>
                  Gp<span>.</span>
                </h3> */}
                <Link href={"/"} passHref>
                  <div className="logo pb-2">
                    <Image
                      src="/Logo.png"
                      alt=""
                      layout="intrinsic"
                      width={50}
                      height={55}
                      className="img-fluid"
                    />
                  </div>
                </Link>
                <p>
                  Calle Osa Mayor 240 <br />
                  Surco - Lima, Perú
                  <br />
                  <br />
                  <strong>Telf:</strong> +51 968 201 380
                  <br />
                  <strong>Email:</strong> devant.dev.pe@gmail.com
                  <br />
                </p>
                <div className="social-links mt-3">
                  <a href="#" className="twitter">
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a href="#" className="facebook">
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a href="#" className="instagram">
                    <i className="bx bxl-instagram"></i>
                  </a>
                  <a href="#" className="google-plus">
                    <i className="bx bxl-skype"></i>
                  </a>
                  <a href="#" className="linkedin">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#">Home</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Nosotros</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Servicios</a>
                </li>
                {/* <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Privacy policy</a>
                </li> */}
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Nuestros Servicios</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Diseño Web</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Desarrollo Web</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Aplicaciones Móviles</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">e-Commerce</a>
                </li>
                {/* <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Product Management</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Marketing</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Graphic Design</a>
                </li> */}
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Newsletter</h4>
              <p>
                ¡Suscríbete a nuestro newsletter para estar al tanto de las
                últimas noticias y promociones!
              </p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Devant</span>
          </strong>
          . Todos los derechos reservados.
        </div>
        <div className="credits" style={{ display: "none" }}>
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
