import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from './Search';
import BookList from './BookList';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Home = ({ language }) => {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    const handleSearch = async (query) => {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
        const data = await response.json();
        setBooks(data.items || []);
    };

    const handleSelectBook = (book) => {
        navigate(`/book/${book.id}`);
    };

    const translations = {
        en: {
            searchPlaceholder: 'Search books...',
            noResults: 'No results found.',
            home: 'HOME',
            settings: 'SETTINGS',
            favorites: 'FAVOURITES',
        },
        et: {
            searchPlaceholder: 'Otsi raamatuid...',
            noResults: 'Tulemusi ei leitud.',
            home: 'KODU',
            settings: 'SEADED',
            favorites: 'LEMMIKUD',
        },
        ru: {
            searchPlaceholder: 'Искать книги...',
            noResults: 'Результатов не найдено.',
            home: 'ГЛАВНАЯ',
            settings: 'НАСТРОЙКИ',
            favorites: 'ИЗБРАННОЕ',
        },
    };

    const { searchPlaceholder, noResults } = translations[language] || translations.en;

    return (
        <Container>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
                <Search placeholder={searchPlaceholder} onSearch={handleSearch} />
            </Box>
            {books.length === 0 ? (
                <Typography variant="body1" sx={{ textAlign: 'center' }}>
                    {noResults}
                </Typography>
            ) : (
                <BookList books={books} onSelectBook={handleSelectBook} />
            )}
        </Container>
    );
};

export default Home;
