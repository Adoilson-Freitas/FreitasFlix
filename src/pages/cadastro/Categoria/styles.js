import styled from 'styled-components';

export const Main = styled.div`
  table {
    border-collapse: collapse;
    width: 80%;
    margin-bottom: 30px;
    margin-left: 10%;
  }

  th,
  td {
    text-align: left;
    padding: 4px;
    margin: 10px;
  }

  tr:nth-child(even) {
    background-color: #44444455;
  }

  td {
    border: 1px solid #000;
  }

  td.titulo {
    width: 30%;
    border-radius: 6px;
  }

  th {
    background-color: #000020;
    color: white;
  }

  input.cor {
    padding: 0;
    height: 40px;
    width: 30%;
    margin-left: 10%;
    background-color: transparent;
    margin-bottom: 40px;
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 18px;
      margin-left: 20px;
    }
  }
`;

export const Button = styled.div`
  button {
    width: 140px;
    height: 40px;
    border-radius: 5px;
    background: none;
    border: 2px solid var(--white);
    color: var(--white);
    font-style: normal;
    font-weight: bold;
    cursor: pointer;
    font-size: 14px;
    position: relative;
    padding: 4px 12px;
    margin: 10px 0 50px 40%;
  }

  button:hover {
    transition: 800ms;
    border: 2px solid #6bd1ff;
    color: #6bd1ff;
  }

  button::before,
  button::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 4px;
    background: #000010;
    transform: skewX(50deg);
    transition: 500ms linear;
  }
  button::before {
    top: -4px;
    left: 10%;
  }
  button::after {
    bottom: -4px;
    right: 10%;
  }
  button:hover::before {
    left: 80%;
  }
  button:hover::after {
    right: 80%;
  }
`;
