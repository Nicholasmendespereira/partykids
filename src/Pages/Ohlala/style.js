import styled from "styled-components";
import "../../Globalstyle.css";
import "../../FontProviders.css"

import bolo from "../../assets/Bolopng.png";

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fbf9f3;
  overflow-y: hidden;
  overflow-x: hidden;
`;
export const Header = styled.header`
  height: 30vh;
  width: 100vw;
  overflow: hidden;
  @media (max-width: 1000px) {
  }
  #fit01 {
    width: 30%;
    position: absolute;
    right: 90%;
    top: -10%;
    @media (max-width: 700px) {
      width: 80%;
      top: -6%;
      right: 70%;
    }
  }
  #fit02 {
    width: 30%;
    position: absolute;
    right: 90%;
    top: -10%;
    @media (max-width: 700px) {
      width: 80%;
      top: 0%;
      right: 50%;
      transform: rotate(80deg);
    }
  }
  #fit03 {
    width: 30%;
    position: absolute;
    right: 90%;
    top: -10%;
    @media (max-width: 700px) {
      width: 80%;
      top: 0%;
      left: 60%;
      transform: rotate(-100deg);
    }
  }
  #fit04 {
    width: 30%;
    position: absolute;
    right: 90%;
    top: -10%;
    @media (max-width: 700px) {
      width: 100%;
      top: 10%;
      left: 5%;
    }
  }
  #fit05 {
    width: 30%;
    position: absolute;
    right: 90%;
    top: -10%;
    @media (max-width: 700px) {
      width: 80%;
      top: -8%;
      left: 20%;
    }
  }
  #balloon{
    width: 100%;
  }
`;
export const Div = styled.div`
  background-image: url(${bolo});
  background-size: 110%;
  background-repeat: no-repeat;
  background-position: 0% 0%;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  #box {
    width: 40%;
    height: 100%;
  }
  .teste {
    font-family: 'Above';
  }
  .teste h1{
    font-size: 3rem;
    color: #85B88A;
  }
  .teste h3, small{
    font-weight: lighter;
    color: #7A6B1D;
  }
  .teste h3{

    font-size: 1.2rem;
  }
`;
