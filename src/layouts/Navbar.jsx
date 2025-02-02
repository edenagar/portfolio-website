import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const appBarStyle = {
    backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.5)' : 'rgb(255, 255, 255)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    backdropFilter: isScrolled ? 'blur(5px)' : 'none',
    transition: 'background-color 0.3s, backdrop-filter 0.3s',
  };

  const iconStyle = {
    color: isScrolled ? 'white' : 'black',
    transition: 'color 0.3s',
  };

  return (
    <AppBar style={appBarStyle}>
      <Toolbar sx={{ minHeight: '48px !important', padding: '0 16px !important' }}>
        <Typography
          variant="h4"
          sx={{
            color: isScrolled ? 'white' : 'black',
            transition: 'color 0.3s',
          }}
          noWrap
        >
          Eden Nagar
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/edennagar/"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://github.com/edenagar"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
        >
          <GitHubIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
