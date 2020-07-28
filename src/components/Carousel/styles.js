import styled from 'styled-components';

export const Title = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 1;
  margin-bottom: 16px;
  display: inline-block;
  padding: 10px;
  background: red;
  line-height: 1;
  border-radius: 4px;

  @media (max-width: 800px) {
    font-size: 14px;
    padding: 10px;
  }
`;

export const ExtraLink = styled.a`
  margin-left: 16px;
  
  text-decoration: none;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
  }
`;


export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin-left: 3%;
  margin-bottom: 16px;

 
 .slick-prev:before,
 .slick-next:before {
      color: #000040; 
      font-size: 35px;
  }
`;
