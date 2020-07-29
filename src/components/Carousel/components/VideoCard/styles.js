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
  &:hover {
    z-index: 40;
    transform: scale(1.2);
    box-shadow: inset 0 0 1em #000010, 0 0 1em #000030;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }

  @media (max-width: 410px) {
    width: 178px;
    height: 77px;
}
 
`;
