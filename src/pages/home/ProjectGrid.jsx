import React from 'react';
import Grid from '@mui/material/Grid';
import ProjectCard from './ProjectCard';
import Box from '@mui/material/Box';


const projects = [
  {
    title: 'T:hub Technion',
    description: 'Inovation day Website CRM.',
    image: 'https://scontent-lhr8-2.xx.fbcdn.net/v/t39.30808-1/320481699_1826323404390922_2032634562119185305_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=c6021c&_nc_ohc=Z2B0j_t06vEAX_X_-qA&_nc_ht=scontent-lhr8-2.xx&oh=00_AfDHWZS8NAQYRhyccXYm_oD5x63sBoJZYo9O8RPRcyqygA&oe=64C24C9B',
    link: ""
  },
  {
    title: 'Sicher Mapping',
    description: 'Company website.',
    image: 'https://www.sicher-mapping.com/static/media/sicher_navbar_logo.a4844a22.webp',
    link: "https://www.sicher-mapping.com"
  },
  {
    title: 'DNA Sequencing Algorithm',
    description: 'Under the supervision of Prof. Lamm.',
    image: "https://biology.technion.ac.il/wp-content/themes/BiologyAcc/images/logo-en.png",
    link: "https://github.com/edenagar/aligner/blob/main/SangerAlinerProject%20by%20EdenNagar.pdf"
  },
  {
    title: 'Kravi Tech',
    description: 'Mentored a face recognition project.',
    image: 'https://media.licdn.com/dms/image/D4D22AQFWpF3sCWp-pQ/feedshare-shrink_800/0/1686665936085?e=1692835200&v=beta&t=HwKaEzENSz5T6y2bKE0KtRWWH48ZTwm7Toh_6Z1qdWY',
    link: "https://github.com/yalmoalm/FaceDetection"
  },
];

const ProjectGrid = () => {
  return (
    <Box sx={{ bgcolor: 'white' }}>
      <Grid container spacing={0}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectGrid;
