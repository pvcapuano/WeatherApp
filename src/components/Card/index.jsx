import React from "react";
import { connect } from "react-redux";
import {
  Container,
  Temp,
  MinMax,
  Img,
  WrapperTemp,
  WrapperImg,
  WrapperMinMax,
} from "./styles";

export const Card = ({ data }) => {
  return (
    <Container>
      <WrapperTemp>
        <Temp>Temperatura: {data[0]?.temp}</Temp>
      </WrapperTemp>

      <WrapperImg>
        <Img
          src={`https://openweathermap.org/img/wn/${data[0]?.icon}@2x.png`}
          alt=""
        />
      </WrapperImg>

      <WrapperMinMax>
        <MinMax>Máx. {data[0]?.temp_max}º</MinMax>
        <MinMax>Mín. {data[0]?.temp_min}º</MinMax>
      </WrapperMinMax>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.temp.data,
    isLoading: state.temp.isLoading,
    error: state.temp.error,
  };
};

export default connect(mapStateToProps)(Card);
