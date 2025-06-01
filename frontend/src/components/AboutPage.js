import React from 'react';
import { Typography, Paper } from '@mui/material';

const About = () => {
    return (
        <Paper elevation={3} sx={{ padding: 4 }}>
            <Typography variant="h4" gutterBottom>
                About Us
            </Typography>
            <Typography variant="body1" gutterBottom>
                This is a sample Dockerized full-stack application built using React and Spring Boot.
                It's designed as a learning project for containerization, DevOps practices, and modern web app development.
            </Typography>
            <Typography variant="body1">
                We aim to provide a clean, modular, and maintainable structure using tools like Docker, MUI, and Spring Boot.
            </Typography>
        </Paper>
    );
};

export default About;
