import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer'; // Assuming you might want the footer on all pages too
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Define the theme here to be used across all pages
const defaultTheme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: '#111', // Apply the dark background globally
                    minHeight: '100vh',
                },
            },
        },
    },
});

const MainLayout = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline /> {/* This applies the body background color */}
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Navbar />
                <Box component="main" sx={{ flexGrow: 1, paddingTop: '20px', paddingBottom: '20px' }}> {/* Added some padding */}
                    <Outlet /> {/* Page content will be rendered here */}
                </Box>
                <Footer />
            </Box>
        </ThemeProvider>
    );
};

export default MainLayout; 