import {
  Container,
  Wrapper,
  Temp,
  Minmax,
  WrapperTemp,
  WrapperMinMax,
  OneButton,
} from "./styles";

import { connect } from "react-redux";
import { useSelector } from "react-redux";

const selectData = (state) => state.temp?.data;

export const MinMax = () => {
  const requests = useSelector(selectData);

  return (
    <Container>
      <Wrapper>
        <WrapperTemp>
          <Temp>Cidades selecionadas:</Temp>
        </WrapperTemp>
        {requests.map((dt) => (
          <WrapperMinMax>
            <p>{dt?.city}</p>
            <Minmax>{dt?.temp_min}</Minmax>
            <Minmax>{dt?.temp_max}</Minmax>
          </WrapperMinMax>
        ))}

        <OneButton to="/">Voltar</OneButton>
      </Wrapper>
    </Container>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    data: state.temp.data,
    isLoading: state.temp.isLoading,
    error: state.temp.error,
  };
};

export default connect(mapStateToProps)(MinMax);
