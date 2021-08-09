/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Grid, Menu, MenuItem, Link, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  toolbar: {
    color: 'white',
    marginTop: '20px',
    marginBottom: '20px',
  },
  text: {
    fontSize: '30px',
    marginLeft: '40px',
  },
  textlink: {
    marginLeft: '1100px',
  },
  menu: {
    display: 'inline-block',
  },
  link: { color: 'white' },
});

const Header = () => {
  const classe = useStyles();

  return (
    <AppBar position="absolute">
      <Grid>
        <Toolbar className={classe.toolbar}>
          <Typography className={classe.text}>Chuck Norris Jokes</Typography>
          <Typography variant="body1" className={classe.textlink}>
            <Link href="/jokes/random" color="primary" className={classe.link}>
              Joke Random
            </Link>
            &emsp;&emsp;
            <Link href="/jokes/game" color="primary" className={classe.link}>
              Jokes Game
            </Link>
            &emsp;&emsp;
            <Link href="/jokes/list" color="primary" className={classe.link}>
              Jokes List
            </Link>
          </Typography>
        </Toolbar>
      </Grid>
    </AppBar>
  );
};

export default Header;
