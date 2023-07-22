import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from './Navbar'
import Intreduction from './Intreduction'
import HorizontalTimeline from './Timeline'
import ProjectGrid from './ProjectGrid'
import Footer from './Footer'


const defaultTheme = createTheme();
const Home = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Navbar />
      <main>
        <Intreduction />
        <HorizontalTimeline />
        <ProjectGrid />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default Home;