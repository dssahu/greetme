import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';

function GreetPage() {
    const navigate = useNavigate();
    const greeting = localStorage.getItem('greeting') || 'No greeting found';

    return (
        <Container maxWidth="sm">
            <Box mt={8} textAlign="center">
                <Typography variant="h5" gutterBottom>
                    {greeting}
                </Typography>
                <Button variant="outlined" onClick={() => navigate('/')}>
                    Back to Home
                </Button>
            </Box>
        </Container>
    );
}

export default GreetPage;
