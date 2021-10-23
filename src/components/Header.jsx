import React from 'react';
import { AppBar, Toolbar, makeStyles, Container } from '@material-ui/core';
import SideDrawer from './SideDrawer';

const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  navbar: {
    backgroundColor: `#100E17`,
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position='fixed' className={classes.navbar}>
      <Toolbar>
        <Container maxWidth='md' className={classes.navbarDisplayFlex}>
          <h1 className='header__sign'>SharjeelYunus</h1>
          <SideDrawer />
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
