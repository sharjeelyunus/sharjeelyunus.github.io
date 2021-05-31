import React from 'react';
import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Container,
  Hidden,
} from '@material-ui/core';
import SideDrawer from './SideDrawer';

const useStyles = makeStyles({
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `center`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
  },
  navbar: {
    backgroundColor: `#141123`,
  },
});

const navLinks = [
  { title: `Home`, path: `https://sharjeelyunus.github.io/#home` },
  { title: `About`, path: `https://sharjeelyunus.github.io/#about` },
  { title: `Portfolio`, path: `https://sharjeelyunus.github.io/#portfolio` },
  { title: `Blogs`, path: `https://sharjeelyunus.github.io/#blogs` },
  { title: `Contact`, path: `https://sharjeelyunus.github.io/#contact` },
];

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position='fixed' className={classes.navbar}>
      <Toolbar>
        <Container maxWidth='md'>
          <Hidden smDown>
            <List
              component='nav'
              aria-labelledby='main navigation'
              className={classes.navDisplayFlex}
            >
              {navLinks.map(({ title, path }) => (
                <a href={path} key={title} className={classes.linkText}>
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                </a>
              ))}
            </List>
          </Hidden>
          <Hidden mdUp>
            <SideDrawer navLinks={navLinks} />
          </Hidden>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
