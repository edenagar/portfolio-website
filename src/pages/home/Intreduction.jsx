import React, { useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import performCanvasManipulations from './NNV';
import useMediaQuery from '@mui/material/useMediaQuery';

const Introduction = () => {
  const canvasRef = useRef(null);
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'));


  useEffect(() => {
    isSmallScreen ? performCanvasManipulations(canvasRef) :
      performCanvasManipulations(canvasRef, 0.20);
  }, [isSmallScreen]);

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
          <canvas
            id="c"
            ref={canvasRef}
            style={{
              position: 'absolute',
              top: 40,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: -1,
            }}
          />
          <Grid item xs={12} md={6}>
            <Typography variant="h5" paragraph>
              Hi! I'm a software developer and esteemed math researcher, specializing in the intricate realm of deep learning on graphs.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Introduction;

