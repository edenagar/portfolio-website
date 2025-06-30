import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

// Add styled component for typing animation
const TypingText = styled(Typography)(({ theme }) => ({
  '@keyframes typing': {
    from: {
      width: 0,
    },
    to: {
      width: '11ch', // Adjust this to match the exact length of "Hi! I'm Eden"
    },
  },

  '@keyframes blink': {
    '50%': {
      borderRightColor: 'transparent',
    },
  },

  display: 'inline-block',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  width: 'fit-content',
  paddingRight: theme.spacing(0.5),
  animation: 'typing 3s steps(11, end), blink 1s step-end infinite',
  borderRight: '2px solid white',
  marginBottom: theme.spacing(3), // Use theme spacing
}));

const Introduction = () => {
  return (
    <Box
      sx={{
        pt: { xs: 8, md: 12 }, // Increased padding using 8px grid
        pb: { xs: 16, md: 8 },
        textAlign: { xs: 'center', md: 'left' },
        color: 'white',
      }}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}> {/* Limit width for better readability */}
            <TypingText variant="h2" component="h1">
              Hi! I'm Eden
            </TypingText>
            <Typography
              variant="h5"
              component="p"
              sx={{
                fontWeight: 400,
                lineHeight: 1.6,
                maxWidth: '620px', // Optimal reading length
                mb: 3, // Theme spacing
              }}
            >
              I'm a software developer and esteemed math researcher, specializing in the intricate realm of deep learning on graphs.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Introduction;

