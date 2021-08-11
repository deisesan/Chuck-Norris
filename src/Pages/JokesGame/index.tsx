/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { CardContent, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { getJokeRandom } from '../../Api/Jokes';
import * as T from './styles';

const JokesGame = () => {
  const [word, setWord] = useState('');
  const [wordPlayer, setWordPlayer] = useState('');
  const [wordSplit, setWordSplit] = useState<string[]>([]);
  const [qtd, setQtd] = useState(0);
  const [win, setWin] = useState(0);
  const [click, setClick] = useState(false);

  const getJoke = async () => {
    try {
      const responseJoke = await getJokeRandom();
      const jokeSplit = responseJoke.data.value.joke.split(' ');
      const media = Math.trunc(jokeSplit.length / 2);
      setWord(jokeSplit[media].replace(/[^\w\s]/gi, ''));
      jokeSplit[media] = '????';
      setWordSplit(jokeSplit);
      console.log(word);
      setQtd(qtd + 1);
    } catch (error) {
      console.log(error);
    }
  };

  const compWord = async () => {
    if (word.toLowerCase() === wordPlayer.toLowerCase()) {
      setClick(!click);
      setWordPlayer('');
      setWin(win + 1);
    } else {
      getJoke();
      setWordPlayer('');
    }
  };

  useEffect(() => {
    getJoke();
  }, [click]);

  return (
    <T.ContainerMain>
      <T.Body>
        <T.ContainerForm>
          <T.CardJoke>
            <CardContent>
              <Typography variant="h5">{wordSplit.map((j) => `${j} `)}</Typography>
            </CardContent>
          </T.CardJoke>
          <T.CardJokePlayer>
            <T.Joke>
              <T.TextFieldMod
                required
                id="standard-required"
                variant="outlined"
                defaultValue=""
                onChange={(e) => setWordPlayer(e.target.value)}
              />
            </T.Joke>
            <T.ButtonJoke>
              <T.ButtonWin variant="contained" color="default" onClick={() => compWord()}>
                Answer
              </T.ButtonWin>
            </T.ButtonJoke>
          </T.CardJokePlayer>
        </T.ContainerForm>
      </T.Body>
      <T.ContainerScore>
        Question: {qtd} <p />
        Hits: {win} <p />
      </T.ContainerScore>
      <T.Process>
        <Typography variant="h6">
          Está sendo processado por essa risada! <p />
          Ass: Eu, Chuck Norris!
        </Typography>
      </T.Process>
      <T.ContainerAnswer>
        Nós meros mortais precisamos saber sobre o sentido da vida, em algum ponto desse site está a{' '}
        <T.InputResposta href="https://youtu.be/T24Cu94qsX4">resposta</T.InputResposta>.
      </T.ContainerAnswer>
      <T.Footer>
        <Link to="https://youtu.be/T24Cu94qsX4" />
      </T.Footer>
    </T.ContainerMain>
  );
};

export default JokesGame;
