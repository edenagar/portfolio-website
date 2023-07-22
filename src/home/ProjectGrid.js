import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const projects = [
  {
    title: 'Project 1',
    description: 'This is the first project.',
    image: 'project1.jpg', // Replace with the image path
  },
  {
    title: 'Project 2',
    description: 'This is the second project.',
    image: 'project2.jpg', // Replace with the image path
  },
  {
    title: 'Project 3',
    description: 'This is the third project.',
    image: 'project3.jpg', // Replace with the image path
  },
  {
    title: 'Project 1',
    description: 'This is the first project.',
    image: 'project1.jpg', // Replace with the image path
  },
  {
    title: 'Project 2',
    description: 'This is the second project.',
    image: 'project2.jpg', // Replace with the image path
  },
  {
    title: 'Project 3',
    description: 'This is the third project.',
    image: 'project3.jpg', // Replace with the image path
  },
  
  // Add more projects here
];

const ProjectGrid = () => {
  return (
    <Grid container spacing={0}>
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} key={index} sx={{ width: '100%' }}>
          <Box
            sx={{
              position: 'relative',
              backgroundImage: `url(${project.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '200px',
              borderRadius: 0,
              '&:hover': {
                transform: 'translateY(-5px)',
                transition: 'transform 0.3s ease',
              },
            }}
          >
            <Paper elevation={0} sx={{ p: 2, height: '100%', borderRadius: 0, bgcolor: 'rgba(255, 255, 255, 0.8)' }}>
              <Typography variant="h6" gutterBottom>
                {project.title}
              </Typography>
              <Typography variant="body1">{project.description}</Typography>
            </Paper>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectGrid;
