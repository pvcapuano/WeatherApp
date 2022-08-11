import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  height: 300px;
  box-shadow: 5px 10px 18px #e1bee7;
  padding: 20px;
  background-color: #ce93d8;
  border-radius: 20px;

  @media (max-width: 425px) {
    width: 90%;
  }
`;

export const CardWrapper = styled.div`
  width: 200px;
`;

export const GroupStatus = styled.div`
  height: 30px;
  margin: 20px 0;
`;

export const Title = styled.h1`
  color: #7b1fa2;
  font-size: 50px;
`;

export const Load = styled.h2`
  color: #ce93d8;
  font-size: 30px;
`;

export const Error = styled.h2`
  color: red;
  font-size: 30px;
`;

export const GroupButton = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  > p {
    color: #7b1fa2;
    font-size: 14px;
    font-weight: 700;
  }
`;

export const Button = styled.button`
  background: #7b1fa2;
  color: #f8f4e4;
  width: 120px;
  padding: 10px;
  border-radius: 20px;
  border: none;
  font-weight: 700;
  font-size: 12px;

  &:hover {
    background-color: #f8f4e4;
    color: #7b1fa2;
  }
`;

export const OneButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #7b1fa2;
  color: #f8f4e4;
  width: 120px;
  padding: 10px;
  border-radius: 20px;
  border: none;
  font-weight: 700;
  font-size: 12px;
  text-decoration: none;

  &:hover {
    background-color: #f8f4e4;
    color: #7b1fa2;
  }
`;
