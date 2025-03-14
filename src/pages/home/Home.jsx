import React, { useRef, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import Introduction from './Intreduction';
import Timeline from './Timeline';
import Navbar from '../../layouts/Navbar'
import Footer from '../../layouts/Footer'
import CssBaseline from '@mui/material/CssBaseline';
import { performCanvasManipulations } from './NNV';
import Box from '@mui/material/Box';


const defaultTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#111',
          minHeight: '100vh',
        },
      },
    },
  },
});

const Home = () => {
  const canvasRef1 = useRef(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    // Ensure the canvas covers the entire document height
    const updateCanvasSize = () => {
      if (canvasRef1.current) {
        canvasRef1.current.width = window.innerWidth;
        canvasRef1.current.height = Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight
        );
      }
    };

    // Initial size setup
    updateCanvasSize();

    // Update size on window resize
    window.addEventListener('resize', updateCanvasSize);

    // First animation
    const animation1 = performCanvasManipulations(
      canvasRef1,
      isSmallScreen ? undefined : 0.35,
      0.80,
      0.95
    );

    // Cleanup function
    return () => {
      if (animation1 && animation1.cleanup) animation1.cleanup();
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, [isSmallScreen]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
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
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh', // Ensure the container takes at least the full viewport height
        }}
      >
        <Navbar />
        <Container
          maxWidth="lg"
          sx={{
            flex: '1 0 auto', // This allows the container to grow and take available space
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Grid container spacing={4}>
            {/* Introduction section */}
            <Grid item xs={12}>
              <Introduction />
            </Grid>

            {/* Timeline section */}
            <Grid item xs={12}>
              <Timeline />
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Home;