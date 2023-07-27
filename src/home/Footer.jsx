import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Footer = () => {
  const email = 'nagar.eden6@gmail.com';

  return (
    <Box sx={{ bgcolor: 'black', p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom color="white">
        Feel free to contact me for any questions, send me an email at{' '}
        <Link href={`mailto:${email}`} color="inherit">
          {email}
        </Link>
        .
      </Typography>
    </Box>
  );
};

export default Footer;
