import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  footer: {
    padding: `10px 0px`,
    opacity: `0.7`,
    color: `#e7e7e8`,
    marginTop: `90px`,
    textAlign: `center`,
  },
});

function Footer() {
  const classes = useStyles();
  return (
    <div>
      <footer className={classes.footer}>
        <p>
          {new Date().getFullYear()}
          &copy; Sharjeel Yunus
        </p>
      </footer>
    </div>
  );
}

export default Footer;
