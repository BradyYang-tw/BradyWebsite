import * as React from "react";
import Layout from "../Layout/Layout";
import Introduce from "../Introduce/Introduce";
import Loading from "../Loading/Loading";
import * as Style from "./styles";
import kobe1 from "@/static/1.jpg";
const Home = () => {
  return (
    <React.Fragment>
      {/* <Loading></Loading> */}
      {/* <Introduce></Introduce> */}
      <Style.homeContainer>
        <Style.introduce>
          <Style.introduceTitle>Hi, I'm Brady</Style.introduceTitle>
          <Style.jobtitle>Frontend Developer</Style.jobtitle>
          <Style.introduceContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            deserunt amet? Nobis quo similique dolorum, modi iste obcaecati
            culpa, molestiae eum veniam, iure magnam impedit repellendus quidem
            ullam quisquam porro.
          </Style.introduceContent>
          <Style.buttonGroup>
            <Style.homeButton>Hire Me</Style.homeButton>
            <Style.homeButton>Let's Talk</Style.homeButton>
          </Style.buttonGroup>
        </Style.introduce>

        <div>
          <Style.homeImage src={kobe1} alt="kobe"></Style.homeImage>
        </div>
      </Style.homeContainer>
    </React.Fragment>
  );
};
export default Home;
