/* eslint-disable react/prop-types */
import Header from "../header/Header.jsx";
import Nav from "../nav/Nav.jsx";
import Footer from "../footer/Footer.jsx";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
