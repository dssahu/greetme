import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 2,
                px: 2,
                mt: 'auto',
                backgroundColor: 'primary.main',
                color: 'white',
                textAlign: 'center',
            }}
        >
            <Typography variant="body2">
                &copy; {new Date().getFullYear()} My Greetings Docker Demo App. All rights reserved.
            </Typography>
        </Box>
    );
};

export default Footer;
