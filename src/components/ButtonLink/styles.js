import styled from "styled-components";


export const Button = styled.div `
a 
{
    width: 200px;
    height: 60px;
    border-radius: 5px;
    background: none;
    border: 2px solid var(--white);
    color: var(--white);
    font-style: normal;
    font-weight: bold;
    cursor: pointer;
    font-size: 16px;
    outline: none;
    position: relative;
    padding: 16px 24px;
}

a:hover {
  transition: 800ms;
  border: 2px solid #004590;
  color: #004590;
}

a::before, a::after
{
    content: "";
    position: absolute;
    width: 10px;
    height: 4px;
    background: #000010;
    transform: skewX(50deg);
    transition: 500ms linear;
}
a::before
{
    top: -4px;
    left: 10%;
}
a::after
{
    bottom: -4px;
    right: 10%;
}
a:hover::before
{
    left: 80%;
}
a:hover::after
{
    right: 80%;
}
  a {
    text-decoration: none;
  }
  

   @media (max-width: 800px) {
    a {
    position: fixed;
    left: 0;
    right: 0;
    bottom: -10px;
    background: var(--black);
    border-radius: 0;
    border: 0;
    text-align: center;
    width: 100%;
    transition: opacity .3s;
    box-sizing: border-box;
    height: 60px;
    }
   a:hover,
   a:focus {
  opacity: 0.9;
  }

  a::before, a::after {
    background: transparent;
  }
}

`;


