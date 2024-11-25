import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const exp = [
  { years: "2021 - Present", title: "Teaching Assistant for “Introduction to Machine Learning“ at the Tehcnion" },
  { years: "2021 - 2023", title: "Wix.com" },
  { years: "2020 - 2021", title: "Freelancer" },
  { years: "2019 - 2020", title: "thub-Technion" },
]

const HorizontalTimeline = () => {
  return (
    <Box
      sx={{
        bgcolor: 'white',
        pt: { xs: 4, md: 8 },
        pb: 6,
      }}
    >
      <Timeline position="alternate">
        {exp.map((cur) => (
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
        ))}
      </Timeline>
    </Box>
  );
};

export default HorizontalTimeline;
