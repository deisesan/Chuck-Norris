/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { Link, Container, AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  bar: {
    position: 'fixed',
    bottom: '0',
    left: '0',
  },
  text: {
    marginTop: '35px',
    marginBottom: '20px',
    fontSize: '20px',
    alignItems: 'right',
    marginLeft: '100px',
    padding: '0px',
  },
  link: {
    color: 'white',
  },
});

const Footer = () => {
  const classe = useStyles();
  return (
    <AppBar className={classe.bar} position="relative" color="primary">
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="body1" className={classe.text}>
            <p>
              <Link href="http://www.icndb.com/api/" color="primary" className={classe.link}>
                The Internet Chuck Norris Database
              </Link>
              &emsp;&emsp;
              <Link href="https://chucknorris.com/" color="primary" className={classe.link}>
                Chuck Norris
              </Link>
            </p>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
