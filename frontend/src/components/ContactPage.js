import React, { useState } from 'react';
import { Typography, Paper, Box, TextField, Button, Alert } from '@mui/material';

const ContactPage = () => {
    const backendUrl = process.env.BACKEND_URL || 'http://localhost:8080';

    const [formName, setFormName] = useState('');
    const [formEmail, setFormEmail] = useState('');
    const [formMessage, setFormMessage] = useState('');

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrors({});
        setSuccessMessage('');

        const data = {
            name: formName,
            email: formEmail,
            message: formMessage,
        };

        try {
            const response = await fetch(`${backendUrl}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const text = await response.text();
                setSuccessMessage(text);
                setFormName('');
                setFormEmail('');
                setFormMessage('');
            } else {
                const errorData = await response.json();
                setErrors(errorData);
            }
        } catch (error) {
            setErrors({ global: 'Failed to send message. Try again later.' });
        }
    };

    return (
        <Paper elevation={3} sx={{ padding: 4, maxWidth: 600, margin: 'auto', mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Contact Us
            </Typography>
            <Typography variant="body1" gutterBottom>
                Have questions or feedback? Reach out below.
            </Typography>

            {successMessage && <Alert severity="success" sx={{ mb: 2 }}>{successMessage}</Alert>}
            {errors.global && <Alert severity="error" sx={{ mb: 2 }}>{errors.global}</Alert>}

            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }} onSubmit={handleSubmit}>
                <TextField
                    label="Your Name"
                    variant="outlined"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    error={Boolean(errors.name)}
                    helperText={errors.name}
                    fullWidth
                />
                <TextField
                    label="Email Address"
                    variant="outlined"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    error={Boolean(errors.email)}
                    helperText={errors.email}
                    fullWidth
                />
                <TextField
                    label="Message"
                    variant="outlined"
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    error={Boolean(errors.message)}
                    helperText={errors.message}
                    multiline
                    rows={4}
                    fullWidth
                />
                <Button variant="contained" color="primary" type="submit">
                    Send Message
                </Button>
            </Box>
        </Paper>
    );
};

export default ContactPage;