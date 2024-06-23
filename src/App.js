import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './components/Home';
import BookDetails from './components/BookDetails';
import Favorites from './components/Favorites';
import Settings from './components/Settings';
import Navbar from './components/Navbar';

const App = () => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme || 'light'; 
    });
    const [language, setLanguage] = useState(() => {
        const savedLanguage = localStorage.getItem('language');
        return savedLanguage || 'en'; 
    });
    const [favorites, setFavorites] = useState(() => {
        const savedFavorites = localStorage.getItem('favorites');
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    });

    useEffect(() => {
        localStorage.setItem('theme', theme);
        localStorage.setItem('language', language);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [theme, language, favorites]);

    const addToFavorites = (book) => {
        setFavorites((prevFavorites) => {
            const updatedFavorites = [...prevFavorites, book];
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            return updatedFavorites;
        });
    };

    const removeFromFavorites = (bookId) => {
        setFavorites((prevFavorites) => {
            const updatedFavorites = prevFavorites.filter((book) => book.id !== bookId);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            return updatedFavorites;
        });
    };

    const muiTheme = createTheme({
        palette: {
            mode: theme,
        },
    });

    return (
        <ThemeProvider theme={muiTheme}>
            <CssBaseline />
            <Router>
                <Navbar language={language} />
                <Routes>
                    <Route path="/" element={<Home language={language} />} />
                    <Route path="/book/:id" element={<BookDetails onAddToFavorites={addToFavorites} />} />
                    <Route
                        path="/favorites"
                        element={<Favorites favorites={favorites} onRemoveFromFavorites={removeFromFavorites} language={language} />}
                    />
                    <Route
                        path="/settings"
                        element={
                            <Settings
                                theme={theme}
                                setTheme={setTheme}
                                language={language}
                                setLanguage={setLanguage}
                            />
                        }
                    />
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;
