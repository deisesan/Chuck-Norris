/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { CardContent, Typography } from '@material-ui/core';
// import { withStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import { Joke } from '../../Types';
import { getJokeRandom } from '../../Api/Jokes';
import * as T from './styles';

// const WhiteTextTypography = withStyles({
//   root: {
//     color: '#FFFFFF',
//     paddingLeft: '3%',
//   },
// })(Typography);

const JokesGame = () => {
  const [word, setWord] = useState('');
  const [wordPlayer, setWordPlayer] = useState('');
  const [wordSplit, setWordSplit] = useState<string[]>([]);
  const [click, setClick] = useState(false);
  const [qtd, setQtd] = useState(0);
  const [win, setWin] = useState(0);
  const [text, setText] = useState('Calma');

  const getJoke = async () => {
    try {
      const responseJoke = await getJokeRandom();
      const jokeSplit = responseJoke.data.value.joke.split(' ');
      const media = Math.trunc(jokeSplit.length / 2);
      setWord(jokeSplit[media]);
      console.log(jokeSplit[media]);
      jokeSplit[media] = '?';
      setWordSplit(jokeSplit);
      setQtd(qtd + 1);
    } catch (error) {
      console.log(error);
    }
  };

  const videoWatch = () => {
    if (text === 'Sucesso') {
      // eslint-disable-next-line no-lone-blocks
      {
        <Redirect to="https://youtu.be/T24Cu94qsX4" />;
      }
    }
  };

  const winner = () => {
    if (win === 2) {
      setText('Segredo');
    }
  };

  const compWord = async () => {
    if (word === wordPlayer) {
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
  }, [click, text]);

  return (
    <T.ContainerMain>
      <T.Body>
        <T.ContainerForm>
          <T.Form>
            <T.CardJoke>
              <CardContent>
                <Typography variant="h5">{wordSplit.map((j) => `${j} `)}</Typography>
              </CardContent>
            </T.CardJoke>
            <T.CardJokePlayer>
              <div>
                <T.TextFieldMod
                  required
                  id="standard-required"
                  variant="outlined"
                  defaultValue=""
                  onChange={(e) => setWordPlayer(e.target.value)}
                />
              </div>
              <T.Ajuda>
                <T.ButtonWin variant="contained" color="default" onClick={() => compWord()}>
                  Press
                </T.ButtonWin>
              </T.Ajuda>
            </T.CardJokePlayer>
          </T.Form>
        </T.ContainerForm>
        <T.ContainerScore>
          Pergunta: {qtd} <p />
          Acertadas: {win} <p />
          <T.ButtonWin variant="contained" color="default" onClick={() => videoWatch()}>
            {text}
          </T.ButtonWin>
        </T.ContainerScore>
      </T.Body>
      <T.Process>
        <Typography variant="h5">
          Está sendo processado por essa risada! <p />
          Ass: Eu, Chuck Norris!
        </Typography>
      </T.Process>
    </T.ContainerMain>
  );
};

export default JokesGame;
