import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// import { makeStyles } from '@material-ui/core/styles';
// import styles from '../styles/BasicTimeline.module.scss';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

export default function BasicTimeline() {
    const theme = createMuiTheme({
        overrides: {
            MuiTimelineItem: {
                missingOppositeContent: {
                    '&::before': {
                        flex: "none",
                        padding: "0"
                    },
                },
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Typography variant="h5" component="h2">Experience</Typography>
            <Timeline>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="body2" color="textSecondary">
                            2018.04
                        </Typography>
                        <Typography component="div">
                            <Box fontWeight="fontWeightBold">
                                京都産業大学
                            </Box>
                        </Typography>
                        <Typography>情報理工学部に入学。</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="body2" color="textSecondary">
                            2020.03~現在
                        </Typography>
                        <Typography component="div">
                            <Box fontWeight="fontWeightBold">
                                株式会社ソフィアソリューションズ
                            </Box>
                        </Typography>
                        <Typography>サーバーサイドを担当。主にPHP, Python, AWSでのシステム開発。たまにフロントのコーディング業務も。</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="body2" color="textSecondary">
                            2020.09
                        </Typography>
                        <Typography component="div">
                            <Box fontWeight="fontWeightBold">
                                株式会社いい生活
                            </Box>
                        </Typography>
                        <Typography>インターン。vue.jsと社内APIを用いて物件探しサービスを開発。</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="body2" color="textSecondary">
                            2020.09
                        </Typography>
                        <Typography component="div">
                            <Box fontWeight="fontWeightBold">
                                ソフトバンク株式会社
                            </Box>
                        </Typography>
                        <Typography>ハッカソン。準優勝。SDGsをテーマに学生と研究室を繋げるプラットフォームを開発。Flask, AWSを使用。</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="body2" color="textSecondary">
                            2021.06~07
                        </Typography>
                        <Typography component="div">
                            <Box fontWeight="fontWeightBold">
                                ヤフー株式会社
                            </Box>
                        </Typography>
                        <Typography>内定者限定のハッカソン。レストランが決まらない時に使うwebサービスを開発。Flask, React, GCPを使用。</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="body2" color="textSecondary">
                            2022.03
                        </Typography>
                        <Typography component="div">
                            <Box fontWeight="fontWeightBold">
                                京都産業大学
                            </Box>
                        </Typography>
                        <Typography>学部で卒業予定。</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="body2" color="textSecondary">
                            2022.04
                        </Typography>
                        <Typography component="div">
                            <Box fontWeight="fontWeightBold">
                                ヤフー株式会社
                            </Box>
                        </Typography>
                        <Typography>新卒入社予定。</Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </ThemeProvider>
    );
}
