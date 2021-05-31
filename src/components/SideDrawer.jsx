import React, { useState } from 'react';
import { IconButton, Drawer } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import SocialLinks from './SocialLinks';
import './SideDrawer.css';

const useStyles = makeStyles({
  list: {
    width: 250,
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
          className={classes.sidebarLinksTag}
          href='https://www.sharjeelyunus.me/Certificates'
        >
          Certificates
        </a>
        <a
          className={classes.sidebarLinksTag}
          href='https://www.sharjeelyunus.me/GraphicsDesign'
        >
          Graphics Design
        </a>
        <a
          className={classes.sidebarLinksTag}
          href='https://www.sharjeelyunus.me/WebDev'
        >
          Web Dev Projects
        </a>
        <a
          className={classes.sidebarLinksTag}
          href='https://www.sharjeelyunus.me/AppDev'
        >
          App Dev Projects
        </a>
      </div>
      <SocialLinks />
    </div>
  );

  return (
    <React.Fragment>
      <IconButton
        edge='start'
        aria-label='menu'
        onClick={toggleDrawer('right', true)}
      >
        <Menu fontSize='large' style={{ color: `rgba(255, 255, 255, 0.5)` }} />
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
