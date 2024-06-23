import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Navbar = ({ language }) => {
    const translations = {
        en: {
            home: 'HOME',
            favorites: 'FAVOURITES',
            settings: 'SETTINGS',
            appBarTitle: 'BOOK SEARCH', 
        },
        et: {
            home: 'KODU',
            favorites: 'LEMMIKUD',
            settings: 'SEADED',
            appBarTitle: 'RAAMATUTE OTSING', 
        },
        ru: {
            home: 'ГЛАВНАЯ',
            favorites: 'ИЗБРАННОЕ',
            settings: 'НАСТРОЙКИ',
            appBarTitle: 'ПОИСК КНИГ', 
        },
    };

    const { home, favorites, settings, appBarTitle } = translations[language] || translations.en;

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {appBarTitle} 
                </Typography>
                <Button color="inherit" component={Link} to="/">{home}</Button> 
                <Button color="inherit" component={Link} to="/favorites">{favorites}</Button> 
                <Button color="inherit" component={Link} to="/settings">{settings}</Button> 
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;




