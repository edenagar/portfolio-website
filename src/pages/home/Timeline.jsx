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
        pt: { xs: 4, md: 8 },
        pb: 6,
      }}
    >
      {experience.map((section, sectionIndex) => (
        <React.Fragment key={sectionIndex}>
          <Typography variant="h5" sx={{ color: 'white', mb: 2, mt: sectionIndex > 0 ? 4 : 0 }}>
            {section.category}
          </Typography>
          <Timeline
            sx={(theme) => ({
              position: 'left',
              [theme.breakpoints.down('sm')]: { position: 'left', flex: 0, padding: 0 },
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
                <TimelineContent>
                  <Typography variant="body2" sx={{ color: 'white' }}>{item.years}</Typography>
                  <Typography sx={{ color: 'white' }}>{item.title}</Typography>
                  {item.details && (
                    <Typography variant="body2" sx={{ color: 'white', opacity: 0.8 }}>
                      {item.details}
                    </Typography>
                  )}
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </React.Fragment>
      ))}
    </Box>
  );
};

export default HorizontalTimeline;