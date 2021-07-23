import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
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

    const allExperiences = [
        {
            date: "2018.04",
            title: "京都産業大学",
            comment: "情報理工学部に入学。"
        },
        {
            date: "2020.03~現在",
            title: "株式会社ソフィアソリューションズ",
            comment: "サーバーサイドを担当。主にPHP, Python, AWSでのシステム開発。たまにフロントのコーディング業務も。"
        },
        {
            date: "2020.09",
            title: "株式会社いい生活",
            comment: "インターン。vue.jsと社内APIを用いて物件探しサービスを開発。"
        },
        {
            date: "2020.09",
            title: "ソフトバンク株式会社",
            comment: "ハッカソン。準優勝。SDGsをテーマに学生と研究室を繋げるプラットフォームを開発。Flask, AWSを使用。"
        },
        {
            date: "2021.06~07",
            title: "ヤフー株式会社",
            comment: "内定者限定のハッカソン。レストランが決まらない時に使うwebサービスを開発。Flask, React, GCPを使用。"
        },
        {
            date: "2022.03",
            title: "京都産業大学",
            comment: "学部で卒業予定。"
        },
        {
            date: "2022.04",
            title: "ヤフー株式会社",
            comment: "新卒入社予定。"
        },
    ]

    return (
        <ThemeProvider theme={theme}>
            <Typography variant="h5" component="h2">Experience</Typography>
            <Timeline>
                {allExperiences.map(({ date, title, comment }, index) => (
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            {index !== allExperiences.length-1 ? <TimelineConnector /> : ''}
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="body2" color="textSecondary">
                                {date}
                            </Typography>
                            <Typography component="div">
                                <Box fontWeight="fontWeightBold">
                                    {title}
                                </Box>
                            </Typography>
                            <Typography>{comment}</Typography>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </ThemeProvider>
    );
}
