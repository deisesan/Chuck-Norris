/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Joke } from '../../Types';
import { getJokeRandom } from '../../Api/Jokes';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

const useStyles = makeStyles({
  root: {
    maxWidth: 1600,
    marginLeft: 100,
    marginTop: 200,
  },
  media: {
    height: 140,
  },
});

const JokeRandom = () => {
  const [joke, setJoke] = useState<Joke>();
  const classes = useStyles();

  const getJoke = async () => {
    try {
      const responseJoke = await getJokeRandom();
      setJoke(responseJoke.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Card className={classes.root}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {joke?.value.joke}
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div>
        <Footer />
      </div>
      {/* <h1>{joke?.type}</h1>
      <h1>{joke?.value.id}</h1>
      <h1>{joke?.value.joke}</h1> */}
    </div>
  );
};

export default JokeRandom;
