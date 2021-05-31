import React from 'react';
import {
  AppBar,
  Toolbar,
  makeStyles,
  Container,
  IconButton,
  Hidden,
} from '@material-ui/core';
import { Home } from '@material-ui/icons';
import SocialLinks from './SocialLinks';
import SideDrawer from './SideDrawer';

const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  navbar: {
    backgroundColor: `#141123`,
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position='fixed' className={classes.navbar}>
      <Toolbar>
        <Container maxWidth='md' className={classes.navbarDisplayFlex}>
          <a href='https://www.sharjeelyunus.me/'>
            <IconButton edge='start' color='inherit' aria-label='home'>
              <Home fontSize='large' />
            </IconButton>
          </a>
          <Hidden smDown>
            <SocialLinks />
          </Hidden>
          <Hidden mdUp>
            <SideDrawer />
          </Hidden>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
