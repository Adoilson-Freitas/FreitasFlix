import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border-radius: 2px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 187px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  transition: 400ms;
  p {
    margin-left: 320px;
    transition: 600ms;
    background-color: transparent;
    color: transparent;
    padding: 10px;
    padding-right: 230px;
    color: #000;
    width: 100vw;
    background-color: #6BD1FF;
    position: absolute;
    font-size: 12px;

  }
  &:hover {
    z-index: 40;
    transform: scale(1.03);
    box-shadow: inset 0 0 1em #000010, 0 0 1em #000030;
  
    p {
    z-index: 58;
    margin-left: 10px;
  }
  
  }
  
 

  &:not(:first-child) {
    margin-left: 20px;
  }

  @media (max-width: 410px) {
    width: 178px;
    height: 77px;
    p {
      font-size: 10px;
    }
}
 
`;

