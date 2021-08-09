/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Joke } from '../../Types';
import { getJoke } from '../../Api/Jokes';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

const useStyles = makeStyles({
  container: {
    maxWidth: '1700px',
    marginLeft: '100px',
    marginRight: '300px',
    marginTop: '100px',
  },
});

const JokesList = () => {
  const [click, setClick] = useState(false);
  const [arrayJokes, setArrayJokes] = useState<Joke[]>([]);

  const getJokes = async () => {
    try {
      const temp = arrayJokes;

      for (let i = 1; i < 10; i += 1) {
        // eslint-disable-next-line no-await-in-loop
        const responseJoke = await getJoke(i);
        if (responseJoke.data.type !== 'NoSuchQuoteException') {
          temp[i] = responseJoke.data;
          setClick(!click);
        }
      }

      setArrayJokes(temp);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJokes();
  }, [click, arrayJokes]);

  const classes = useStyles();

  return (
    <div>
      <div>
        <Header />
        <TableContainer className={classes.container} component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Piadas</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {arrayJokes.map((joke) => (
                <TableRow key={joke.value.id}>
                  <TableCell align="left">{joke.value.id}</TableCell>
                  <TableCell align="left">{joke.value.joke}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default JokesList;
