/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getJokeRandom } from '../../Api/Jokes';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

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
  const [click, setClick] = useState(false);
  const [arrayJokes, setArrayJokes] = useState<string[]>([]);

  const limparStorage = () => {
    localStorage.clear();
    setArrayJokes([]);
  };

  const getJoke = async () => {
    try {
      const responseJoke = await getJokeRandom();
      localStorage.setItem(`${responseJoke.data.value.id}`, `${responseJoke.data.value.joke}`);
      console.log(responseJoke.data);
      updateArrayJoke();
      setClick(!click);
    } catch (error) {
      console.log(error);
    }
  };

  // eslint-disable-next-line consistent-return
  const updateArrayJoke = () => {
    if (localStorage.length !== 0) {
      const temp = arrayJokes;
      for (let i = 0; i < localStorage.length; i += 1) {
        const id = localStorage.key(i);
        const aux = localStorage.getItem(`${id}`);
        temp[i] = aux || '';
      }
      setClick(true);
      setArrayJokes(temp);
    }
  };

  useEffect(() => {
    updateArrayJoke();
  }, [click, arrayJokes]);

  const classes = useStyles();

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className={classes.buttons}>
        <Button onClick={() => limparStorage()}>Limpar</Button>
        <Button onClick={() => getJoke()}>Descobrir</Button>
      </div>
      <div>
        <TableContainer className={classes.container} component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                {/* <TableCell>ID</TableCell> */}
                <TableCell>Piadas</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {arrayJokes.map((joke, index) => (
                <TableRow key={joke}>
                  {/* <TableCell align="left">{localStorage.key(index)}</TableCell> */}
                  <TableCell align="left">{joke}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <TableContainer>
          <Card className={classes.root}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {arrayJokes.map((joke, index) => (
                  <TableRow key={joke}>
                    <TableCell align="left">{localStorage.key(index)}</TableCell>
                    <TableCell align="left">{joke}</TableCell>
                  </TableRow>
                ))}
              </Typography>
            </CardContent>
          </Card>
        </TableContainer> */}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default JokesGame;
