import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header id="header" className="fixed-top ">
      <div className="container d-flex align-items-center justify-content-between">
        {/* <h1 className="logo">
          <a href="index.html">
            Gp<span>.</span>
          </a>
        </h1> */}
        <Link href={"/"} passHref>
          <div className="logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Logo.png" alt="" className="img-fluid" />
          </div>
        </Link>

        <nav className="nav-menu d-none d-lg-block">
          <ul>
            <li className="active">
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="#about">Equipo</Link>
            </li>
            <li>
              <Link href="#services">Servicios</Link>
            </li>
            <li>
              <Link href="#portfolio">Portafolio</Link>
            </li>
            {/* <li>
              <a href="#team">Team</a>
            </li>
            <li className="drop-down">
              <a href="">Drop Down</a>
              <ul>
                <li>
                  <a href="#">Drop Down 1</a>
                </li>
                <li className="drop-down">
                  <a href="#">Deep Drop Down</a>
                  <ul>
                    <li>
                      <a href="#">Deep Drop Down 1</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 2</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 3</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 4</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Drop Down 2</a>
                </li>
                <li>
                  <a href="#">Drop Down 3</a>
                </li>
                <li>
                  <a href="#">Drop Down 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li> */}
          </ul>
        </nav>

        {/* <a href="#about" className="get-started-btn scrollto">
          Get Started
        </a> */}
      </div>
    </header>
  );
};

export default Navbar;
