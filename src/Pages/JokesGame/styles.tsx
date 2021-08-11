import { Card, TextField, Button } from '@material-ui/core';
import styled from 'styled-components';

export const ContainerMain = styled.div`
  width: 100%;
  margin-top: 5%;
`;

export const ContainerForm = styled.div`
  width: 60%; //fixa a tabel
  margin-left: 10%;
  margin-top: 20%;
  border-radius: 20px;
`;

export const Form = styled.form`
  font-size: 20px;
`;

export const Ajuda = styled.form`
  padding-left: 10%;
  padding-top: 2%;
`;

export const Input = styled.input`
  margin-right: 2%;
`;

export const Body = styled.div`
  display: flex;
`;

export const ContainerScore = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 2%;
  font-size: 30px;
  margin-top: 20%;
  padding-bottom: 2%;
  margin-left: 3%;
  border-radius: 20px;
`;

export const ButtonWin = styled(Button)``;

export const ContainerTable = styled.div``;

export const CardJoke = styled(Card)`
  margin-bottom: 2%;
  display: flex;
`;

export const CardJokePlayer = styled.div`
  margin-left: 50%;
  margin-right: 10%;
  display: flex;
`;

export const TextFieldMod = styled(TextField)`
  background-color: rgba(255, 255, 255, 0.6);
  width: 450px;
  border-radius: 10px;
`;

export const Process = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  width: 500px;
  border-radius: 10px;
  margin-left: 1%;
`;
