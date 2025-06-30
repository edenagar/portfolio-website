import { createTheme } from '@mui/material/styles';

// Typography scale using 1.250 "Major Third" ratio
const baseSize = 16; // 1rem
const scale = 1.25;

const typography = {
    // Font families
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',

    // Headings use Poppins
    h1: {
        fontFamily: '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontSize: `${baseSize * Math.pow(scale, 5)}px`, // ~61px
        fontWeight: 700,
        lineHeight: 1.2,
        marginBottom: '32px', // 8px rhythm
    },
    h2: {
        fontFamily: '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontSize: `${baseSize * Math.pow(scale, 4)}px`, // ~49px
        fontWeight: 600,
        lineHeight: 1.25,
        marginBottom: '24px', // 8px rhythm
    },
    h3: {
        fontFamily: '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontSize: `${baseSize * Math.pow(scale, 3)}px`, // ~39px
        fontWeight: 600,
        lineHeight: 1.3,
        marginBottom: '24px', // 8px rhythm
    },
    h4: {
        fontFamily: '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontSize: `${baseSize * Math.pow(scale, 2)}px`, // ~31px
        fontWeight: 500,
        lineHeight: 1.35,
        marginBottom: '16px', // 8px rhythm
    },
    h5: {
        fontFamily: '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontSize: `${baseSize * scale}px`, // ~25px
        fontWeight: 500,
        lineHeight: 1.4,
        marginBottom: '16px', // 8px rhythm
    },
    h6: {
        fontFamily: '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontSize: `${baseSize}px`, // 20px
        fontWeight: 500,
        lineHeight: 1.45,
        marginBottom: '16px', // 8px rhythm
    },

    // Body text uses Inter
    body1: {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontSize: `${baseSize}px`, // 16px
        fontWeight: 400,
        lineHeight: 1.6,
        marginBottom: '16px', // 8px rhythm
    },
    body2: {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontSize: `${baseSize * 0.875}px`, // 14px
        fontWeight: 400,
        lineHeight: 1.5,
        marginBottom: '8px', // 8px rhythm
    },

    // Other text variants
    subtitle1: {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontSize: `${baseSize * Math.pow(scale, 0.5)}px`, // ~18px
        fontWeight: 500,
        lineHeight: 1.5,
        marginBottom: '16px',
    },
    subtitle2: {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontSize: `${baseSize * 0.875}px`, // 14px
        fontWeight: 500,
        lineHeight: 1.45,
        marginBottom: '8px',
    },
    caption: {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontSize: `${baseSize * 0.75}px`, // 12px
        fontWeight: 400,
        lineHeight: 1.4,
    },
};

// Spacing system based on 8px grid
const spacing = (factor) => `${8 * factor}px`;

const theme = createTheme({
    typography,
    spacing,

    // Custom breakpoints to control max-width
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },

    // Component overrides for consistent spacing and max-width
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    maxWidth: '980px !important', // Max width for readability
                    paddingLeft: '24px',
                    paddingRight: '24px',
                    '@media (max-width: 600px)': {
                        paddingLeft: '16px',
                        paddingRight: '16px',
                    },
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    // Ensure proper vertical rhythm
                    '&:last-child': {
                        marginBottom: 0,
                    },
                },
                paragraph: {
                    marginBottom: '16px',
                    '&:last-child': {
                        marginBottom: 0,
                    },
                },
            },
        },
        // Add consistent spacing to sections
        MuiBox: {
            styleOverrides: {
                root: {
                    '& > *:not(:last-child)': {
                        marginBottom: '24px',
                    },
                },
            },
        },
    },
});

export default theme; 