import React from 'react';
import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: "50px",
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  content: {
    textAlign: "center"
  }
});

export default function Profile() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.content}>
        <Image
          priority
          src="/images/profile.png"
          height={144}
          width={144}
          alt={"tokky08"}
        />
        <Typography variant="h5" component="h2">
          tokky08
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          KAZUHITO TOKITA
        </Typography>
        <Typography variant="body2" component="p">
          Server Side Engineer
        </Typography>
      </CardContent>
    </Card>
  );
}
