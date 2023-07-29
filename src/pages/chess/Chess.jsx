import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../../layouts/Navbar'
import Footer from '../../layouts/Footer'
import './index.css';
import Game from './components/game.js'
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { Link } from "react-router-dom";



const defaultTheme = createTheme();
const Chess = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Navbar />
            <main>
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    style={{ minHeight: '100vh', paddingTop: '2vh' }}
                >
                    <Grid item>
                        <Typography variant="subtitle1">
                            <Link to="/">Back</Link> {/* Replace "/back" with your desired link */}
                        </Typography>
                    </Grid>
                    <Game />
                </Grid>
            </main>
            <Footer />
        </ThemeProvider>
    );
}

export default Chess;