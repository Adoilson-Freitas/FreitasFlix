import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    transform: initial;
  }

  .slick-prev {
    left: -20px;
  }
  .slick-next {
    right: 16px;
  }
  .slick-prev:before,
  .slick-next:before {
    font-size: 35px;
    color: ${({ categoryColor }) => categoryColor};
    text-shadow: 0 0 8px ${({ categoryColor }) => categoryColor};
  }

  @media (max-width: 410px) {
    .slick-prev {
      left: -4px;
    }
    .slick-prev:before,
    .slick-next:before {
      font-size: 22px;
    }
  }
`;

export const SliderItem = styled.li`
  margin-left: 15px;

  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;

const Slider = ({ categoryColor, children }) => (
  <Container categoryColor={categoryColor}>
    <SlickSlider
      {...{
        dots: false,
        infinite: true,
        speed: 300,
        centerMode: false,
        variableWidth: true,
        adaptiveHeight: true,
      }}
    >
      {children}
    </SlickSlider>
  </Container>
);
export default Slider;
