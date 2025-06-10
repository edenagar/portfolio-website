import React, { useRef, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import Introduction from './Intreduction';
import Timeline from './Timeline';
import { performCanvasManipulations } from './NNV';

const Home = () => {
  const canvasRef1 = useRef(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const updateCanvasSize = () => {
      if (canvasRef1.current) {
        canvasRef1.current.width = window.innerWidth;
        canvasRef1.current.height = Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight
        );
      }
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    const animation1 = performCanvasManipulations(
      canvasRef1,
      isSmallScreen ? undefined : 0.35,
      0.80,
      0.95
    );

    return () => {
      if (animation1 && animation1.cleanup) animation1.cleanup();
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, [isSmallScreen]);

  return (
    <>
      <canvas
        id="canvas1"
        ref={canvasRef1}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          opacity: isSmallScreen ? 0.5 : 0.8,
        }}
      />
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Introduction />
          </Grid>
          <Grid item xs={12}>
            <Timeline />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;