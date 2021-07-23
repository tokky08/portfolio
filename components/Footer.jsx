import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  footer: {
    textAlign: "center",
    padding: "20px 0"  
  }
});

const Footer = () => {
    const classes = useStyles();
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className={classes.footer}>
            <small>&copy; {year} tokky08</small>
        </footer>
    )
}

export default Footer;