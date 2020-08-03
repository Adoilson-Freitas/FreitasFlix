import styled from 'styled-components';

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
export const Loading = styled.div`
  position: absolute;
  top: 110%;
  left: 50%;
  transform: translate(-50%, -50%);
  .ring {
    width: 120px;
    height: 120px;
    border-radius: 50%;

    box-shadow: 0 4px 0 #ddd;
    background: transparent;
    margin-top: -40px;
    animation: animate 1s linear infinite;
  }
  .text {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    color: #888;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    margin-top: 20px;
    font-size: 13px;
    background: transparent;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
