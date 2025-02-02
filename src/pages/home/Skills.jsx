import React from 'react';
import { Box, Container, Grid, Paper, Typography, useTheme, useMediaQuery } from '@mui/material';

const Skills = () => {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.only('xs'));
    const isSm = useMediaQuery(theme.breakpoints.only('sm'));

    const skillCategories = [
        {
            title: "Programming Languages",
            skills: ["Python", "JavaScript", "C++"]
        },
        {
            title: "Web Technologies",
            skills: ["React", "Node.js", "HTML/CSS", "Material-UI"]
        },
        {
            title: "Data Science & ML",
            skills: ["PyTorch", "Graph Neural Networks", "Data Analysis"]
        },
        {
            title: "Tools & Platforms",
            skills: ["Git", "AWS", "Linux"]
        }
    ];

    // Dynamic grid sizing based on screen size
    const getGridSize = () => {
        if (isXs) return 12; // Full width on mobile
        if (isSm) return 6;  // Two columns on tablet
        return 3;            // Four columns on desktop
    };

    return (
        <Box
            sx={{
                py: { xs: 4, sm: 6, md: 8 }, // Responsive padding
                // bgcolor: 'background.paper'
            }}
        >
            <Container maxWidth="lg">
                <Grid
                    container
                    spacing={{ xs: 2, sm: 3, md: 4 }} // Responsive spacing
                    justifyContent="center"
                >
                    {skillCategories.map((category) => (
                        <Grid item xs={getGridSize()} key={category.title}>
                            <Paper
                                elevation={3}
                                sx={{
                                    p: { xs: 2, sm: 2.5, md: 3 }, // Responsive padding
                                    height: '100%',
                                    transition: 'transform 0.2s, box-shadow 0.2s',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: 6,
                                    },
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    gutterBottom
                                    sx={{
                                        fontSize: { xs: '1.1rem', sm: '1.25rem' }, // Responsive font size
                                        mb: 2,
                                        fontWeight: 600,
                                    }}
                                >
                                    {category.title}
                                </Typography>
                                <Box sx={{ flexGrow: 1 }}>
                                    {category.skills.map((skill) => (
                                        <Typography
                                            key={skill}
                                            variant="body1"
                                            sx={{
                                                fontSize: { xs: '0.9rem', sm: '1rem' }, // Responsive font size
                                                mb: 1,
                                                '&:last-child': { mb: 0 },
                                            }}
                                        >
                                            • {skill}
                                        </Typography>
                                    ))}
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Skills; 