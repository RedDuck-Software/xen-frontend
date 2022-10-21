import React from "react";
import styled from "styled-components";

//@ts-ignore
const SliderComponent = ({ value, handleChange, min, max }) => {
  return (
    <Container>
      <Slider type="range" defaultValue={value} onChange={handleChange} min={min} max={max} />
    </Container>
  );
};

export default SliderComponent;
const Container = styled.div`
  display: grid;
  place-items: center;
  margin-left: 10px;
`;

const Slider = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 415px;
  height: 17px;
  outline: 0;
  margin-top: 50px;
  margin-bottom: 60px;
  background: ${(props) =>
    `linear-gradient(to right, #ff9800 0%, #ff9800 ${props.value}%, #fff ${props.value}%, #fff 100%);`};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);

::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 34px;
    height: 34px;
    background: #e4ab19;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
  ::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: rgba(195, 152, 42, 0.8);
    cursor: pointer;
    border: none;
  }
`;
