import React from "react";
import styled from "styled-components";
import background from "../assets/background.jpg";
const BackgroundImage = () => {
  return (
    <Container>
      <img src={background} alt="background" />
    </Container>
  );
};
const Container = styled.div`
  height: 100%;
  width: 100%;

  img {
    height: 100%; /* Take up full height of the Container */
    width: 100%;
  }
`;

export default BackgroundImage;
