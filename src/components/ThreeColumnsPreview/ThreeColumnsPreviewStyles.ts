import styled from "styled-components";

export const TCPPage = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  section:nth-child(1) {
    border-radius: 10px 0 0 10px;
  }

  section:nth-child(3) {
    border-radius: 0 10px 10px 0;
  }
`;

export const Columns = styled.section`
  display: flex;
`;

export const CarColumn = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 325px;
  padding: 40px 35px;
  background-color: ${(props) => props.color};
`;

export const CarTitle = styled.h1`
  margin: 15px 0;
  font-family: "Big Shoulders Display", cursive;
  font-weight: 700;
  color: white;
  font-size: 32px;
`;

export const CarDescription = styled.p`
  color: white;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 200;
  margin-bottom: 120px;
  line-height: 30px;
`;

export const LearnMoreButton = styled.button`
  margin: 0;
  display: inline;
  border: 2px solid white;
  background-color: white;
  color: ${(props) => props.color};
  font-family: "Lexend Deca", sans-serif;
  font-weight: 500px;
  border-radius: 30px;
  padding: 10px 20px;
  cursor: pointer;
  transition: 0.5s all;

  &:hover {
    color: white;
    background-color: ${(props) => props.color};
  }
`;
