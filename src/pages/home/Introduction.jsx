import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

// Add styled component for typing animation
const TypingText = styled(Typography)`
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 11ch; /* Adjust this to match the exact length of "Hi! I'm Eden" */
    }
  }

  @keyframes blink {
    50% {
      border-right-color: transparent;
    }
  }

  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  width: fit-content;
  padding-right: 4px;
  animation: 
    typing 3s steps(11, end),
    blink 1s step-end infinite;
  border-right: 2px solid white;
`;

const Introduction = () => {
  return (
    <Box
      sx={{
        pt: { xs: 6, md: 8 },
        pb: { xs: 14, md: 6 },
        textAlign: { xs: 'center', md: 'left' },
        color: 'white',
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TypingText variant="h5" paragraph>
              Hi! I'm Eden
            </TypingText>
            <Typography variant="h5" paragraph>
              I'm a software developer and esteemed math researcher, specializing in the intricate realm of deep learning on graphs.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Introduction;

