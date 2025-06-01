import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline, Box, Container } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import GreetPage from './components/GreetPage';
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";

function App() {
    return (
        <>
            <CssBaseline />
            <Box display="flex" flexDirection="column" minHeight="100vh">
                <Header />
                <Container component="main" sx={{ mt: 4, mb: 2, flexGrow: 1 }}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/greet" element={<GreetPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </Container>
                <Footer />
            </Box>
        </>
    );
}

export default App;
