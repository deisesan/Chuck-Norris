import { Card, TextField, Button } from '@material-ui/core';
import styled from 'styled-components';

export const ContainerMain = styled.div`
  width: 100%;
`;

export const ContainerForm = styled.div`
  background-color: teal;
  width: 60%; //fixa a tabel
  margin-left: 10%;
  margin-top: 20%;
`;

export const Form = styled.form`
  font-size: 20px;
`;

export const Input = styled.input`
  margin-right: 2%;
`;

export const Body = styled.div`
  display: flex;
`;

export const ContainerScore = styled.div`
  background-color: white;
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 2%;
  font-size: 30px;
  margin-top: 20%;
  padding-bottom: 2%;
  margin-left: 3%;
`;

export const Joke = styled.div``;

export const ButtonWin = styled(Button)`
  margin-bottom: 2%;
  margin-left: 2%;
`;

export const ContainerTable = styled.div`
  width: 75%;
  margin-left: 10%;
  margin-right: 20%;
  margin-top: 1%;
`;

export const CardJoke = styled(Card)`
  margin-bottom: 2%;
`;

export const TextFieldMod = styled(TextField)``;
