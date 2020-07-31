import styled from 'styled-components';

export const Title = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 1;
  margin-bottom: 16px;
  display: inline-block;
  padding: 10px;
  line-height: 1;
  border-radius: 0 0 0 20px;
  box-shadow: 0 0 8px #099;

  @media (max-width: 800px) {
    font-size: 14px;
    padding: 10px;
  }

  @media (max-width: 410px) {
    padding: 4px;
  }
`;

export const ExtraLink = styled.a`
  margin-left: 16px;

  text-decoration: none;
  transition: opacity 0.3s;
  &:hover,
  &:focus {
    opacity: 0.5;
  }
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
  }
  @media (max-width: 410px) {
    font-size: 13px;
    padding: 6px;
    margin-top: 13px;
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin-left: 3%;
  margin-bottom: 16px;

  @media (max-width: 410px) {
    margin-bottom: -20px;

    .slick-prev:before,
    .slick-next:before {
      font-size: 1px;
    }

    .texto {
      display: flex;
      align-items: center;
    }
  }
`;
