import React from 'react';
import AppBar from '@mui/material/AppBar';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Navbar = () => {
  const appBarStyle = {
    backgroundColor: 'white',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  };

  const iconStyle = {
    color: 'black',
  };

  return (
    <AppBar style={appBarStyle}>
      <Toolbar>
        <Typography variant="h4" color="black" noWrap>
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
