import styled from "styled-components";

export const OSCPage = styled.main`
  background-image: url("images/pattern-background-desktop.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-color: hsl(225, 100%, 94%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: "Red Hat Display", sans-serif;
`;

export const OSCShape = styled.div`
  background-color: white;
  width: 450px;
  border-radius: 20px;

  img {
    border-radius: 20px 20px 0 0;
  }
`;

export const OSCContent = styled.div`
  padding: 20px 35px;
`;

export const OSCTitle = styled.h1`
  text-align: center;
  font-weight: 700;
`;

export const OSCDescription = styled.span`
  font-weight: 500;
  color: grey;
  p {
    text-align: center;
  }
`;

export const OSCAnnualPlan = styled.div`
  display: flex;
  align-items: center;
  border-radius: 20px;
  background-color: rgb(248, 249, 255);
  padding: 20px;

  img {
    margin-right: 20px;
    display: inline;
  }

  a {
    margin-left: auto;
  }
`;

export const OSCAnnualPlanPricing = styled.span`
  display: inline-flex;
  flex-direction: column;

  span:nth-child(1) {
    font-weight: 700;
    margin: 0px;
  }

  span:nth-child(2) {
    font-weight: 500;
    margin: 0px;
  }
`;

export const OSCButtons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  button {
    font-family: "Red Hat Display", sans-serif;
    height: 50px;
    border-radius: 10px;
    border: none;
    cursor: pointer;

    &:nth-child(1) {
      color: white;
      font-weight: 700;
      background-color: hsl(245, 75%, 52%);
      box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.3);
      transition: 0.5s background-color;

      &:hover {
        background-color: hsl(224, 23%, 55%);
      }
    }

    &:nth-child(2) {
      font-weight: 700;
      background-color: transparent;
      margin-top: 10px;
    }
  }
`;
