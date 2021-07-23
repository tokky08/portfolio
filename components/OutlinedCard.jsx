import React from 'react';
import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from '../styles/OutlinedCard.module.scss'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: "50px",
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

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    // <Card className={`${classes.root}, ${styles.card}`} variant="outlined">
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.content}>
        <Image
          priority
          src="/images/profile.png"
          // className={utilStyles.borderCircle}
          height={144}
          width={144}
          alt={"tokky08"}
        />
        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography> */}
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
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
