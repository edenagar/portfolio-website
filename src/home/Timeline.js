import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

const exp = [
    {years: "2019 - 2020", title: "thub-Technion"},
    {years: "2020 - 2021", title: "freelancer"},
    {years: "2021 - Present", title: "Wix.com"}
]

const HorizontalTimeline = () => {
  return (
    <Timeline position="alternate">
        {exp.map((cur)=> (
            <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="body2">{cur.years}</Typography>
              <Typography>{cur.title}</Typography>
            </TimelineContent>
          </TimelineItem>
        ) )}
    </Timeline>
  );
};

export default HorizontalTimeline;
