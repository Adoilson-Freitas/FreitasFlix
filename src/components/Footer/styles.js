import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 1px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;

  a.dev {
    color: #ff0000;
    text-decoration: none;
  }
  a.dev:hover {
    opacity: 0.7;
  }
`;


export const Logo = styled.div `
  img {
    max-width: 168px;
  }

@media (max-width: 800px) {
    img {
      max-width: 115px;
    }
}

`;