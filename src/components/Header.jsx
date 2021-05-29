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
  { title: `Home`, path: `http://localhost:3000/#home` },
  { title: `About`, path: `http://localhost:3000/#about` },
  { title: `Portfolio`, path: `http://localhost:3000/#portfolio` },
  { title: `Blogs`, path: `http://localhost:3000/#blogs` },
  { title: `Contact`, path: `http://localhost:3000/#contact` },
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
