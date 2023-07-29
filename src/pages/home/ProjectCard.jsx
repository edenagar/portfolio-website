import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const projectCardStyle = {
        position: 'relative',
        backgroundImage: `url(${project.image})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '200px',
        borderRadius: 0,
        filter: 'grayscale(100%)',
        transition: 'filter 0.3s ease, transform 0.3s ease',
        '&:hover': {
            filter: 'grayscale(0%)',
            transform: 'translateY(-5px)',
        },
    };

    const card = () => {
        return (
            <Box sx={projectCardStyle}>
                <Paper elevation={0} sx={{ p: 2, height: '100%', borderRadius: 0, bgcolor: 'rgba(255, 255, 255, 0.8)' }}>
                    <Typography variant="h6" gutterBottom>
                        {project.title}
                    </Typography>
                    <Typography variant="body1">{project.description}</Typography>
                </Paper>
            </Box>
        );
    };

    return (
        <Grid item xs={12} sm={6} md={4} sx={{ width: '100%' }}>
            {project.link ? (
                <Link to={project.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    {card()}
                </Link>
            ) : (
                card()
            )}
        </Grid>
    );
};

export default ProjectCard;

