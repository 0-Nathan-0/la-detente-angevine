import React from "react";
import NavBar from "../components/navBar";
import HeroMenu from "../components/heroMenu";
import Carte from "../components/carte";
import Footer from "../components/footer";

const Menu: React.FC = () => {
  return (
    <>
      <NavBar />
      <HeroMenu />
      <Carte />
      <Footer />
    </>
  );
};

export default Menu;
