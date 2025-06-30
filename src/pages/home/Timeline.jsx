import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const experience = [
  {
    category: "Work Experience",
    items: [
      {
        years: "2023 - Present",
        title: "Teaching Assistant at the Technion",
        details: "Introduction to Machine Learning, Numerical Analysis, Complex Analysis"
      },
      {
        years: "2021 - 2023",
        title: "Full-Stack Developer at WIX Home",
        details: "Developing, debugging, and contributing to one of the most visited dashboard online"
      },
      { years: "2020 - 2021", title: "Freelancer" },
      { years: "2019 - 2020", title: "thub-Technion" },
    ]
  },
  {
    category: "Education",
    items: [
      {
        years: "2023 - Present",
        title: "M.Sc. at Technion - Israel Institute of Technology",
        details: "Mathematical Foundations of Deep Learning, Department of Mathematics (GPA: 94)\nResearch: Schrödinger Graph Convolutional Deep Neural Networks"
      },
      {
        years: "2019 - 2023",
        title: "B.Sc. at Technion - Israel Institute of Technology",
        details: "Mathematics and Computer Science, received dean's excellence award"
      }
    ]
  }
];

const HorizontalTimeline = () => {
  return (
    <Box
      sx={{
        pt: { xs: 6, md: 10 },
        pb: 8,
        maxWidth: '980px',
        mx: 'auto',
      }}
    >
      {experience.map((section, sectionIndex) => (
        <Box key={sectionIndex} sx={{ mb: sectionIndex < experience.length - 1 ? 6 : 0 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              color: 'white',
              mb: 4,
              mt: sectionIndex > 0 ? 6 : 0,
              fontWeight: 600,
            }}
          >
            {section.category}
          </Typography>
          <Timeline
            sx={(theme) => ({
              position: 'left',
              [theme.breakpoints.down('sm')]: {
                position: 'left',
                flex: 0,
                padding: 0,
                marginLeft: theme.spacing(-2),
              },
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0
              }
            })}
          >
            {section.items.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="primary" />
                  {index !== section.items.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent sx={{ pb: 3 }}>
                  <Typography
                    variant="caption"
                    component="p"
                    sx={{
                      color: 'white',
                      opacity: 0.7,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      fontWeight: 500,
                      mb: 1,
                    }}
                  >
                    {item.years}
                  </Typography>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      color: 'white',
                      fontWeight: 500,
                      mb: item.details ? 1 : 0,
                      lineHeight: 1.4,
                    }}
                  >
                    {item.title}
                  </Typography>
                  {item.details && (
                    <Typography
                      variant="body2"
                      component="p"
                      sx={{
                        color: 'white',
                        opacity: 0.8,
                        lineHeight: 1.5,
                        maxWidth: '600px',
                        whiteSpace: 'pre-line',
                      }}
                    >
                      {item.details}
                    </Typography>
                  )}
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>
      ))}
    </Box>
  );
};

export default HorizontalTimeline;