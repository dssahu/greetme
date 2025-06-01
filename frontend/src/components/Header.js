import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="h6" component={RouterLink} to="/" sx={{ color: 'white', textDecoration: 'none', flexGrow: 1 }}>
                    My Greetings Docker Demo Application
                </Typography>
                <Box>
                    <Button color="inherit" component={RouterLink} to="/">Home</Button>
                    <Button color="inherit" component={RouterLink} to="/about">About</Button>
                    <Button color="inherit" component={RouterLink} to="/contact">Contact</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
