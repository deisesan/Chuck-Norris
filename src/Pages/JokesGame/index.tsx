/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Joke } from '../../Types';
import { getJokeRandom } from '../../Api/Jokes';

const useStyles = makeStyles({
  container: {
    maxWidth: 1200,
    marginLeft: 100,
    marginRight: 300,
    marginTop: '20px',
  },
  buttons: {
    marginLeft: '100px',
    marginTop: '100px',
  },
  root: {
    maxWidth: 1600,
    marginLeft: 100,
  },
  media: {
    height: 140,
  },
});

const JokesGame = () => {
  const [joke, setJoke] = useState<Joke>();
  const [word, setWord] = useState('');
  const [wordPlayer, setWordPlayer] = useState('');
  const [wordSplit, setWordSplit] = useState<string[]>([]);
  const [arrayJokes, setArrayJokes] = useState<string[]>([]);
  const [click, setClick] = useState(false);
  const classes = useStyles();

  const getJoke = async () => {
    try {
      if (localStorage.length === 10) {
        clearStorage();
      }
      const responseJoke = await getJokeRandom();
      setJoke(responseJoke.data);
      const jokeSplit = responseJoke.data.value.joke.split(' ');
      const media = Math.trunc(jokeSplit.length / 2);
      setWord(jokeSplit[media]);
      console.log(jokeSplit[media]);
      jokeSplit[media] = '?';
      setWordSplit(jokeSplit);
      updateArrayJoke();
    } catch (error) {
      console.log(error);
    }
  };

  const updateArrayJoke = () => {
    if (localStorage.length !== 0) {
      const temp = arrayJokes;
      for (let i = 0; i < localStorage.length; i += 1) {
        const id = localStorage.key(i);
        const aux = localStorage.getItem(`${id}`);
        temp[i] = aux || '';
      }
      setArrayJokes(temp);
    }
  };

  const clearStorage = () => {
    localStorage.clear();
  };

  const compWord = async () => {
    if (word === wordPlayer) {
      localStorage.setItem(`${joke?.value.id}`, `${joke?.value.joke}`);
      updateArrayJoke();
      setClick(!click);
    } else {
      getJoke();
      setWordPlayer('');
    }
  };

  useEffect(() => {
    getJoke();
    updateArrayJoke();
  }, [click]);

  return (
    <div>
      <form>
        {wordSplit.map((j) => `${j} `)}
        <input type="text" name="fvalue" value={wordPlayer} onChange={(e) => setWordPlayer(e.target.value)} />
        <input type="button" value="Botão" onClick={() => compWord()} />
      </form>
      <TableContainer className={classes.container} component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Piadas</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {arrayJokes.map((j) => (
              <TableRow key={j}>
                <TableCell align="left">{j}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default JokesGame;
