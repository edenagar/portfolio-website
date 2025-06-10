import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Chess = () => {
    return (
        <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'white' }}>
                Chess AI Project
            </Typography>
            <Typography variant="body1">
                This page will feature a chess game where you can play against an AI.
            </Typography>
            {/* Chess game component and AI integration will go here */}
        </Container>
    );
};

export default Chess; 