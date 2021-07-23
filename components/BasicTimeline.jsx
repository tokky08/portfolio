import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
// import { makeStyles } from '@material-ui/core/styles';
// import styles from '../styles/BasicTimeline.module.scss';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

export default function BasicTimeline() {
    const theme = createMuiTheme({
        overrides: {
            // MuiTimelineItem: {
            //     root: {
            //         display: "block"
            //     }
            // },
            MuiTimelineItem: {
                missingOppositeContent: {
                    '&::before': {
                        flex: "none"
                    },
                    // backgroundColor: "#ff9999",
                },
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Timeline>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Eat</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Code</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent>Sleep</TimelineContent>
                </TimelineItem>
            </Timeline>
        </ThemeProvider>
    );
}
