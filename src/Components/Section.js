import React from "react";
import styled from "styled-components";

function Section({ title, description, image, leftBtnText, rightBtnText }) {
  console.log(image);
  return (
    <Wrap image={image}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{leftBtnText}</LeftButton>
          {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  //   background-image: url("/images/model-3.jpg");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url(/images/${props.image})`};
`;

const ItemText = styled.div`
  padding: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  margin-bottom: 0px;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.button`
  background-color: rgba(23, 26, 32, 0.8);
  color: #fff;
  height: 40px;
  width: 256px;
  border-radius: 40px;
  border: none;
  margin-right: 10px;
  cursor: pointer;
`;
const RightButton = styled.button`
  background-color: white;
  height: 40px;
  width: 256px;
  border-radius: 40px;
  border: none;
  color: black;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const DownArrow = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 20px;
  animation: animateDown infinite 2s;
  overflow: hidden;
`;

const Buttons = styled.div``;
