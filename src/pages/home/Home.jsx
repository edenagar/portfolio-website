import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Introduction from './Intreduction';
import Timeline from './Timeline';
import Navbar from '../../layouts/Navbar'
import Footer from '../../layouts/Footer'
import CssBaseline from '@mui/material/CssBaseline';

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
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg">
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
    </ThemeProvider>
  );
};

export default Home;