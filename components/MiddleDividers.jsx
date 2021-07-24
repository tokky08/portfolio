import React from 'react'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    // backgroundColor: theme.palette.background.paper,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  section1: {
    margin: theme.spacing(3, 2),
  },
  section2: {
    margin: theme.spacing(2),
  },
  section3: {
    margin: theme.spacing(3, 1, 1),
  },
}));

export default function MiddleDividers(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div className={classes.section1}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h5">
                <Link href={`/blog/${props.id}`}>
                    <a>{props.title}</a>
                </Link>
            </Typography>
          </Grid>
        </Grid>
        <Typography gutterBottom variant="body1">
          {props.date}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {props.body}
        </Typography>
      </div>
      <Divider variant="middle" />
    </div>
  );
}
