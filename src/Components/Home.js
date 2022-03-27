import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title={"Model 3"}
        leftBtnText={"Learn More"}
        image={`model-3.jpg`}
        rightBtnText={"Buy Now"}
        description={"Order Online for Touchless Delivery"}
      />
      <Section
        title={"Model S"}
        image={"model-s.jpg"}
        description={"Order Now for Touchless Delivery"}
        leftBtnText={"Learn More"}
        rightBtnText={"Buy Now"}
      />
      <Section
        title={"Model X"}
        image={"model-x.jpg"}
        description={"Order Now for Touchless Delivery"}
        leftBtnText={"Learn More"}
        rightBtnText={"Buy Now"}
      />
      <Section
        title={"Model Y"}
        image={"model-y.jpg"}
        description={"Order Now for Touchless Delivery"}
        leftBtnText={"Learn More"}
        rightBtnText={"Buy Now"}
      />
      <Section
        title={"Solar Panel"}
        image={"solar-panel.jpg"}
        description={"Solar Panels for the Future"}
        leftBtnText={"Learn More"}
        rightBtnText={"Buy Now"}
      />
      <Section
        title={"Solar Roof"}
        image={"solar-roof.jpg"}
        description={"Solar Roofs for the Future"}
        leftBtnText={"Learn More"}
        rightBtnText={"Buy Now"}
      />
      <Section
        title={"Accessories"}
        image={"accessories.jpg"}
        description={"Accessories for the Future"}
        leftBtnText={"Learn More"}
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
