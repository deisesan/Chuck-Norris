import { Card, TextField, Button } from '@material-ui/core';
import styled from 'styled-components';

export const ContainerMain = styled.div`
  width: 100%;
  margin-top: 5%;
  @media (max-width: 1475px) {
    margin-top: 10%;
  }
  @media (max-width: 1050px) {
    margin-top: 20%;
  }
  @media (max-width: 900px) {
    margin-top: 25%;
  }
  @media (max-width: 770px) {
    margin-top: 35%;
  }
  @media (max-width: 625px) {
    margin-top: 45%;
    margin-left: -5%;
  }
  @media (max-width: 500px) {
    margin-left: -7%;
  }
`;

export const ContainerForm = styled.div`
  width: 60%; //fixa a tabel
  margin-left: 10%;
  margin-top: 20%;
  border-radius: 20px;
`;

export const ButtonJoke = styled.form`
  padding-left: 5%;
  padding-top: 2%;
  @media (max-width: 1640px) {
    margin-left: 10%;
    padding-left: 0%;
  }
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
  padding-top: 2%;
  padding-bottom: 2%;
  font-size: 30px;
  margin-left: 75%;
  margin-top: -10%;
  border-radius: 20px;
  width: 200px;
  @media (max-width: 1640px) {
    margin-left: 75%;
    margin-top: -11%;
    padding-bottom: 1%;
  }
  @media (max-width: 1340px) {
    font-size: 22px;
    width: 150px;
  }
  @media (max-width: 705px) {
    margin-top: -28%;
    margin-bottom: 15%;
  }
  @media (max-width: 655px) {
    margin-top: -35%;
    margin-bottom: 20%;
    width: 140px;
    margin-left: 72%;
  }
  @media (max-width: 550px) {
    margin-top: -40%;
    margin-bottom: 30%;
    width: 140px;
    margin-left: 72%;
  }
  @media (max-width: 465px) {
    margin-top: -60%;
    margin-bottom: 40%;
    width: 140px;
    margin-left: 72%;
  }
`;

export const ContainerAnswer = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding-left: 2%;
  padding-right: 0%;
  font-size: 20px;
  margin-top: 5%;
  margin-left: 45%;
  border-radius: 20px;
  width: 860px;
  @media (max-width: 1640px) {
    margin-top: 1%;
    margin-left: 40%;
  }
  @media (max-width: 1500px) {
    width: 450px;
    margin-left: 60%;
  }
  @media (max-width: 1215px) {
    margin-left: 50%;
  }
  @media (max-width: 1095px) {
    margin-left: 45%;
    margin-top: 3%;
  }
  @media (max-width: 870px) {
    margin-left: 12%;
    margin-top: 5%;
  }
  @media (max-width: 860px) {
    width: 420px;
    margin-top: 2%;
    padding-right: 2%;
    margin-left: 12%;
  }
  @media (max-width: 485px) {
    margin-left: 7%;
  }
`;

export const InputResposta = styled.a`
  text-decoration: none;
  color: black;
  font-weight: bold;
`;

export const CardJoke = styled(Card)`
  margin-bottom: 2%;
  display: flex;
`;

export const CardJokePlayer = styled.div`
  margin-left: 50%;
  margin-right: 10%;
  display: flex;
  @media (max-width: 1360px) {
    margin-left: 40%;
  }
  @media (max-width: 1140px) {
    margin-left: 30%;
  }
  @media (max-width: 980px) {
    margin-left: 10%;
  }
  @media (max-width: 755px) {
    margin-left: 0%;
  }
`;

export const TextFieldMod = styled(TextField)`
  background-color: rgba(255, 255, 255, 0.6);
  width: 450px;
  border-radius: 10px;
  @media (max-width: 1640px) {
    width: 300px;
  }
`;

export const Process = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  width: 500px;
  border-radius: 10px;
  margin-left: 5%;
  padding-left: 1%;
  padding-top: 1%;
  padding-bottom: 1%;
  @media (max-width: 1640px) {
    margin-top: 2%;
  }
  @media (max-width: 1340px) {
    margin-top: 5%;
    margin-left: 15%;
  }
  @media (max-width: 870px) {
    width: 420px;
  }
  @media (max-width: 485px) {
    margin-left: 10%;
  }
`;

export const Footer = styled.div``;

export const ButtonWin = styled(Button)``;

export const ContainerTable = styled.div``;

export const Joke = styled.div``;
