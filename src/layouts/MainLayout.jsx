import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Box from '@mui/material/Box';

const MainLayout = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <Box component="main" sx={{ flexGrow: 1 }}>
                <Outlet /> {/* Page content will be rendered here */}
            </Box>
            <Footer />
        </Box>
    );
};

export default MainLayout; 