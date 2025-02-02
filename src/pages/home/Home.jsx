import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Intreduction from './Intreduction'
import Skills from './Skills'
import HorizontalTimeline from './Timeline'
import ProjectGrid from './ProjectGrid'
import Navbar from '../../layouts/Navbar'
import Footer from '../../layouts/Footer'

const defaultTheme = createTheme();
const Home = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Navbar />
      <main>
        <Intreduction />
        <Skills />
        <HorizontalTimeline />
        <ProjectGrid />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default Home;