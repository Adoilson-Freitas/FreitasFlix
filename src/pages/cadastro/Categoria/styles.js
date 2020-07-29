import styled from 'styled-components';

export const Main = styled.div`
  table {
    border-collapse: collapse;
    width: 80%;
    margin-bottom: 30px;
    margin-left: 10%;
}

th, td {
    text-align: left;
    padding: 8px;
}

tr:nth-child(even){background-color: #44444455}

th {
    background-color: #000020;
    color: white;
}


 input.cor{
  padding: 0;
  height: 40px;
  width: 20%;
  background-color: transparent;
  display: block;
  margin: 20px 0 30px 10%;
  border-radius: 4px;

}

.label-float{
  position: relative;
  padding-top: 13px;
}

.label-float input,
.label-float textarea{
  border: 0;
  background-color: #fff;
  border-radius: 4px;
  border-bottom: 2px solid #000030;
  outline: none;
  min-width: 180px;
  font-size: 18px;
  transition: all .3s ease-out;
  padding: 15px 7px;
  width: 80%;
  margin-left: 10%;
}

.label-float input:focus,
.label-float input:focus,
.label-float textarea:focus,
.label-float textarea:focus{
  border-bottom: 3px solid #3951b2;
}

.label-float input::placeholder{
  color:transparent;
}

.label-float label{
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  color: #444;
  margin-left: 12%;
  margin-top: 28px;
  transition: all .3s ease-out;
  -webkit-transition: all .2s ease-out;
  -moz-transition: all .2s ease-out;
}

.label-float input:focus + label,
.label-float input:not(:placeholder-shown) + label,
.label-float textarea:focus + label,
.label-float textarea:not(:placeholder-shown) + label{
  font-size: 13px;
  margin-top: 14px;
  margin-left: 10%;
  padding-left: 5px;
  opacity: 0.7;
}

@media (max-width: 800px) {
    h1 {
      font-size: 18px;
      margin-left: 20px;
    }

}
`;



export const Button = styled.div `
button 
{
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
    margin: 10px 0 50px 10%;
}

button:hover {
  transition: 800ms;
  border: 2px solid #6BD1FF;
  color: #6BD1FF;
}

button::before, button::after
{
    content: "";
    position: absolute;
    width: 10px;
    height: 4px;
    background: #000010;
    transform: skewX(50deg);
    transition: 500ms linear;
}
button::before
{
    top: -4px;
    left: 10%;
}
button::after
{
    bottom: -4px;
    right: 10%;
}
button:hover::before
{
    left: 80%;
}
button:hover::after
{
    right: 80%;
}



`;
