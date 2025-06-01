import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Container,
    Typography,
    TextField,
    Button,
    Box,
    CircularProgress
} from '@mui/material';

function HomePage() {
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const backendUrl = process.env.BACKEND_URL || "http://localhost:8080";

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name.trim()) {
            setError("Name is required.");
            return;
        }
        setError("");
        setLoading(true);

        try {
            const response = await fetch(`${backendUrl}/api/greet`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name }),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('greeting', data.message);
                navigate('/greet');
            } else {
                setError("Something went wrong with the backend.");
            }
        } catch (err) {
            setError("Failed to connect to the backend.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container maxWidth="sm">
            <Box mt={8} textAlign="center">
                <Typography variant="h4" gutterBottom>
                    Welcome!
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Enter your name"
                        variant="outlined"
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        error={Boolean(error)}
                        helperText={error}
                        sx={{ my: 2 }}
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
                        {loading ? <CircularProgress size={24} /> : 'Get Greeting'}
                    </Button>
                </form>
            </Box>
        </Container>
    );
}

export default HomePage;
