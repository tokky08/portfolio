import React from 'react';
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  bar: {
    color: "#000",
    backgroundColor: "#ffffff"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar display="flex" p={1}>
          <Box p={1} flexGrow={1}>
            <Link href="/"><a>tokky08.dev</a></Link>
          </Box>
          <Box p={1}>
            <Link href="blog"><a>Blog</a></Link>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
