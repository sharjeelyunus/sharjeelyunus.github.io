import React, { useState } from 'react';
import { IconButton, Drawer } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import './SideDrawer.css';

const useStyles = makeStyles({
  list: {
    width: 280,
  },
  sidebarLinks: {
    display: `flex`,
    flexDirection: `column`,
    margin: `20px`,
    fontSize: `18px`,
  },
  sidebarLinksTag: {
    color: `white`,
    textDecoration: `none`,
    lineHeight: 1.8,
    border: `1px solid white`,
    padding: `10px`,
    margin: `10px`,
    textAlign: `center`,
    borderRadius: `78.8418px`,
    fontWeight: 'bold',
    '&:hover': {
      background: 'white',
      color: `#100e17`,
    },
  },
});

const SideDrawer = () => {
  const classes = useStyles();
  const [state, setState] = useState({ right: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ [anchor]: open });
  };

  const sideDrawerList = (anchor) => (
    <div
      className={classes.list}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className={classes.sidebarLinks}>
        <a
          href='https://www.sharjeelyunus.me/'
          className={classes.sidebarLinksTag}
        >
          Home
        </a>
        <a className={classes.sidebarLinksTag} href='/Certificates'>
          Certificates
        </a>
        <a className={classes.sidebarLinksTag} href='/GraphicsDesign'>
          Graphics Design
        </a>
        <a className={classes.sidebarLinksTag} href='/WebDev'>
          Web Dev Projects
        </a>
        <a className={classes.sidebarLinksTag} href='/AppDev'>
          App Dev Projects
        </a>
        <a
          className={classes.sidebarLinksTag}
          href='https://dev.to/sharjeelyunus'
        >
          Read Blogs on DEV
        </a>
        <a
          className={classes.sidebarLinksTag}
          href='https://medium.com/@sharjeelyunus'
        >
          Read Blogs on Medium
        </a>
        <a className={classes.sidebarLinksTag} href='/#contact'>
          Contact
        </a>
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <IconButton
        edge='start'
        aria-label='menu'
        onClick={toggleDrawer('right', true)}
      >
        <Menu fontSize='large' style={{ color: `rgba(255, 255, 255)` }} />
      </IconButton>

      <Drawer
        anchor='right'
        open={state.right}
        onOpen={toggleDrawer('right', true)}
        onClose={toggleDrawer('right', false)}
      >
        {sideDrawerList('right')}
      </Drawer>
    </React.Fragment>
  );
};

export default SideDrawer;
