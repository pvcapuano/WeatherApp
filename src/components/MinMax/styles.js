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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 300px;
  box-shadow: 5px 10px 18px #e1bee7;
  padding: 20px;
  background-color: #ce93d8;
  border-radius: 20px;

  @media (max-width: 425px) {
    width: 90%;
  }
`;

export const WrapperTemp = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

export const Temp = styled.p`
  color: #7b1fa2;
  font-size: 18px;
  font-weight: 700;
`;

export const WrapperMinMax = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Minmax = styled.p`
  font-size: 12px;
  color: #7b1fa2;
  font-weight: 700;
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
