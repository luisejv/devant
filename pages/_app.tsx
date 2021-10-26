import "@styles/globals.css";
import "@assets/vendor/bootstrap/css/bootstrap.min.css";
import "@assets/vendor/icofont/icofont.min.css";
import "@assets/vendor/boxicons/css/boxicons.min.css";
import "@assets/vendor/owl.carousel/assets/owl.carousel.min.css";
import "@assets/vendor/venobox/venobox.css";
import "@assets/vendor/remixicon/remixicon.css";
import "@assets/vendor/aos/aos.css";
import "@assets/css/style.css";

import type { AppProps } from "next/app";
import Layout from "../components/shared/Layout";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Script
        strategy="beforeInteractive"
        src="../assets/vendor/jquery/jquery.min.js"
      />
      <Script
        strategy="beforeInteractive"
        src="../assets/vendor/bootstrap/js/bootstrap.bundle.min.js"
      />
      <Script
        strategy="beforeInteractive"
        src="../assets/vendor/jquery.easing/jquery.easing.min.js"
      />
      {/* <Script
        strategy="beforeInteractive"
        src="../assets/vendor/php-email-form/validate.js"
      /> */}
      <Script
        strategy="beforeInteractive"
        src="../assets/vendor/owl.carousel/owl.carousel.min.js"
      />
      <Script
        strategy="beforeInteractive"
        src="../assets/vendor/isotope-layout/isotope.pkgd.min.js"
      />
      <Script
        strategy="beforeInteractive"
        src="../assets/vendor/venobox/venobox.min.js"
      />
      <Script
        strategy="beforeInteractive"
        src="../assets/vendor/waypoints/jquery.waypoints.min.js"
      />
      <Script
        strategy="beforeInteractive"
        src="../assets/vendor/counterup/counterup.min.js"
      />
      <Script strategy="beforeInteractive" src="../assets/vendor/aos/aos.js" />
      <Script strategy="beforeInteractive" src="../assets/js/main.js" />
    </>
  );
}
export default MyApp;
