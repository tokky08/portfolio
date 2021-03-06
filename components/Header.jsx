import React from 'react';
import Link from 'next/link'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  bar: {
    color: "#000",
    backgroundColor: "#ffffff"
  },
  hover: {
    '&::hover': {
      textDecoration: "none"
    }
  }
}));

export default function Header(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
        <CssBaseline />
        <ElevationScroll {...props}>
            <AppBar className={classes.bar}>
            <Toolbar>
                <Box p={1} flexGrow={1} fontSize={20}>
                    <Link href="/"><a className={classes.hover}>tokky08.dev</a></Link>
                </Box>
                <Box p={1} fontSize={20}>
                    <Link href="/blog"><a className={classes.hover}>Blog</a></Link>
                </Box>
            </Toolbar>
            </AppBar>
        </ElevationScroll>
        <Toolbar />
        </React.Fragment>
    );
}
