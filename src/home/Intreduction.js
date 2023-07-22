import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'; // Import the Grid component

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
        <Grid container spacing={2}> {/* Use the Grid container */}
          <Grid item xs={12} md={6}> {/* First Grid item for text */}
            <Typography variant="h5" align="center" color="white" paragraph>
            Hi! I'm a software developer and esteemed math researcher, specializing in the intricate realm of neural network algorithms.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Contact</Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}> {/* Second Grid item for the additional Box */}
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
