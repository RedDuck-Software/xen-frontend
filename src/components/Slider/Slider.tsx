import React from "react";

import styled from "styled-components";

import sliderThumb from "../../assets/slider/slider-thumb.svg";
import sliderDots from "../../assets/slider/slider-dots.png";

type SliderComponentProps = {
  handleChange: any;
  min: number;
  max: number;
  value: string;
};

const SliderComponent = ({
  handleChange,
  min,
  max,
  value,
}: SliderComponentProps) => {
  const getBackgroundSize = () => {
    return { backgroundSize: `${(Number(value) * 100) / max}% 100%` };
  };

  return (
    <Container>
      <Slider
        value={value}
        type="range"
        onChange={handleChange}
        min={min}
        max={max}
        style={getBackgroundSize()}
      />
      <Dots />
    </Container>
  );
};

export default SliderComponent;

const Container = styled.div`
  display: grid;
  place-items: center;
  margin-left: 10px;
  position: relative;
`;

const Slider = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 415px;
  height: 17px;
  outline: 0;
  margin-top: 40px;
  cursor: pointer;
  background: #2a67c34d;
  background-image: linear-gradient(#c3982a, #c3982a);
  background-repeat: no-repeat;

  ::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 34px;
    height: 34px;
    background: url(${sliderThumb});
    background-size: 100%;
    position: relative;
    z-index: 2;
  }

  ::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: rgba(195, 152, 42, 0.8);
    cursor: pointer;
    border: none;
  }
`;

const Dots = styled.div`
  position: absolute;
  z-index: 1;
  width: 383px;
  height: 5px;
  background: url(${sliderDots});
  top: 47px;
`;
