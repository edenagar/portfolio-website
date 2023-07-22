import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'black', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom color="white">
          Footer
        </Typography>
      </Box>
    )
}

export default Footer;