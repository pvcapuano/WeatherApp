import React from "react";
import { connect } from "react-redux";
import {
  Button,
  Container,
  GroupButton,
  Title,
  Wrapper,
  Load,
  Error,
  CardWrapper,
  GroupStatus,
  OneButton,
} from "./styles";

import {
  loadDataRequest,
  loadDataRequest2,
  loadDataRequest3,
} from "../../store/modules/temp/actions";
import Card from "../Card";

export const Weather = ({
  isLoading,
  error,
  loadDataRequest,
  loadDataRequest2,
  loadDataRequest3,
}) => {
  return (
    <Container>
      <Title>Previsão do tempo</Title>
      <GroupStatus>
        {isLoading && <Load>Carregando...</Load>}
        {error && <Error>Erro!</Error>}
      </GroupStatus>
      <Wrapper>
        <GroupButton>
          <p>Selecione a cidade:</p>
          <Button onClick={() => loadDataRequest("Rio de Janeiro")}>
            Rio de Janeiro
          </Button>
          <Button onClick={() => loadDataRequest2("São Paulo")}>
            São Paulo
          </Button>
          <Button onClick={() => loadDataRequest3("Minas Gerais")}>
            Minas Gerais
          </Button>
          <OneButton to="/temperatura">Min./Máx</OneButton>
        </GroupButton>

        <CardWrapper>{!isLoading && <Card />}</CardWrapper>
      </Wrapper>
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

const mapDispatchToProps = (dispatch) => {
  return {
    loadDataRequest: () => dispatch(loadDataRequest()),
    loadDataRequest2: () => dispatch(loadDataRequest2()),
    loadDataRequest3: () => dispatch(loadDataRequest3()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
