import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

const Introduction = () => {
  return (
    <Box
      sx={{
        bgcolor: 'black',
        pt: 8,
        pb: 6,
      }}
    >
      <Container >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" align="center" color="white" paragraph>
            Hi! I'm a software developer and esteemed math researcher, specializing in the intricate realm of neural network algorithms.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{

                pt: 3,
                pb: 2,
              }}
            >
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Introduction;
