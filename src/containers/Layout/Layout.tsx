import * as React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import * as Style from "./style";

interface Props {
  children?: React.ReactNode;
  // any props that come into the component
}

const Layout = ({ children }: Props) => {
  console.log("Layout");
  return (
    <Style.layoutContainer>
      <Header />
      {children}
      <Footer />
    </Style.layoutContainer>
  );
};

export default Layout;
