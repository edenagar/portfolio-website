import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const projects = [
  {
    title: 'Sicher Mapping',
    description: 'Company website.',
    image: 'https://www.sicher-mapping.com/static/media/sicher_navbar_logo.a4844a22.webp.',
  },
  {
    title: 'T:hub Technion',
    description: 'Inovation day Website CRM.',
    image: 'https://scontent-lhr8-2.xx.fbcdn.net/v/t39.30808-1/320481699_1826323404390922_2032634562119185305_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=c6021c&_nc_ohc=Z2B0j_t06vEAX_X_-qA&_nc_ht=scontent-lhr8-2.xx&oh=00_AfDHWZS8NAQYRhyccXYm_oD5x63sBoJZYo9O8RPRcyqygA&oe=64C24C9B', // Replace with the image path
  },
  {
    title: 'DNA Sequencing Algorithm', 
    description: 'Under the supervision of Prof. Lamm.',
    image: "https://biology.technion.ac.il/wp-content/themes/BiologyAcc/images/logo-en.png",
  },
  {
    title: 'Kravi Tech',
    description: 'Mentored a face recognition project.',
    image: 'https://media.licdn.com/dms/image/D4D22AQFWpF3sCWp-pQ/feedshare-shrink_800/0/1686665936085?e=1692835200&v=beta&t=HwKaEzENSz5T6y2bKE0KtRWWH48ZTwm7Toh_6Z1qdWY', // Replace with the image path
  },
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
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
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
