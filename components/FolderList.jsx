import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Twitter, GitHub, Note } from '@material-ui/icons';
import Image from 'next/image';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        // backgroundColor: theme.palette.background.paper,
    },
    typography: {
        marginTop: "30px"
    },
    firstItem: {
        marginTop: "10px"
    }
}));

export default function FolderList() {
    const classes = useStyles();

    const linksList = [
        {
            href: "https://github.com/tokky08",
            icon: <GitHub />,
            primary: "GitHub"
        },
        {
            href: "https://twitter.com/tokky08",
            icon: <Twitter />,
            primary: "Twitter"
        },
        {
            href: "https://note.com/tokky08",
            icon: <Note />,
            primary: "note"
        },
        {
            href: "https://www.wantedly.com/id/tokky08",
            icon: <Image priority src="/images/wantedly.png" height={40} width={40} alt={"Wantedly"} />,
            primary: "Wantedly"
        }
    ]

    return (
        <List className={classes.root}>
            <Typography variant="h5" component="h2" className={classes.typography}>External Links</Typography>
            {linksList.map(({ href, icon, primary }, index) => (
                <Link href={href}>
                <a>
                <ListItem className={classes.firstItem}>
                    <ListItemAvatar>
                    <Avatar>
                        {icon}
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={primary} secondary={href} />
                </ListItem>
                </a>
                </Link>
            ))}
        </List>
    );
}