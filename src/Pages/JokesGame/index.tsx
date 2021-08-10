/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@material-ui/core';
import { Joke } from '../../Types';
import { getJokeRandom } from '../../Api/Jokes';
import * as T from './styles';

const JokesGame = () => {
  const [joke, setJoke] = useState<Joke>();
  const [word, setWord] = useState('');
  const [wordPlayer, setWordPlayer] = useState('');
  const [wordSplit, setWordSplit] = useState<string[]>([]);
  const [arrayJokes, setArrayJokes] = useState<string[]>([]);
  const [click, setClick] = useState(false);
  const [qtd, setQtd] = useState(0);
  const [win, setWin] = useState(0);
  const [text, setText] = useState('Calma');

  const getJoke = async () => {
    try {
      const responseJoke = await getJokeRandom();
      setJoke(responseJoke.data);
      const jokeSplit = responseJoke.data.value.joke.split(' ');
      const media = Math.trunc(jokeSplit.length / 2);
      setWord(jokeSplit[media]);
      console.log(jokeSplit[media]);
      jokeSplit[media] = '?';
      setWordSplit(jokeSplit);
      // updateArrayJoke();
      setQtd(qtd + 1);
    } catch (error) {
      console.log(error);
    }
  };

  // const updateArrayJoke = () => {
  //   if (localStorage.length !== 0) {
  //     const temp = arrayJokes;
  //     for (let i = 0; i < localStorage.length; i += 1) {
  //       const id = localStorage.key(i);
  //       const aux = localStorage.getItem(`${id}`);
  //       temp[i] = aux || '';
  //       setWin(localStorage.length);
  //     }
  //     setArrayJokes(temp);
  //   }
  // };

  const winner = () => {
    if (win === 2) {
      setText('Segredo');
    }
  };

  const compWord = async () => {
    if (word === wordPlayer) {
      // localStorage.setItem(`${joke?.value.id}`, `${joke?.value.joke}`);
      // updateArrayJoke();
      setClick(!click);
      setWordPlayer('');
      setWin(win + 1);
      winner();
    } else {
      getJoke();
      setWordPlayer('');
    }
  };

  useEffect(() => {
    getJoke();
    // updateArrayJoke();
  }, [click, text]);

  return (
    <T.ContainerMain>
      <T.Body>
        <T.ContainerForm>
          <T.Form>
            <T.Joke>
              <T.CardJoke>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {wordSplit.map((j) => `${j} `)}
                  </Typography>
                </CardContent>
              </T.CardJoke>
              {/* <T.Button type="button" value="Botão" onClick={() => compWord()} /> */}
            </T.Joke>
            <T.TextFieldMod
              required
              id="standard-required"
              variant="outlined"
              label="Answer"
              onChange={(e) => setWordPlayer(e.target.value)}
            />
            <T.ButtonWin variant="contained" color="default" onClick={() => compWord()}>
              Press
            </T.ButtonWin>
          </T.Form>
        </T.ContainerForm>
        <T.ContainerScore>
          Pergunta: {qtd} <p />
          Acertadas: {win} <p />
          <T.ButtonWin variant="contained" color="default">
            {text}
          </T.ButtonWin>
        </T.ContainerScore>
      </T.Body>
      {/* <T.ContainerTable>
        <TableContainer component={Paper}>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Jokes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {arrayJokes.map((j) => (
              <TableRow key={j}>
                <TableCell align="center">{j}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableContainer>
      </T.ContainerTable> */}
    </T.ContainerMain>
  );
};

export default JokesGame;
