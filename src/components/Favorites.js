import React, { useState } from 'react';
import { Container, Card, CardContent, Typography, Button } from '@mui/material';

const Favorites = ({ favorites, onRemoveFromFavorites, language }) => {
    const translations = {
        en: {
            favoritesTitle: 'Favourites',
            removeFromFavorites: 'Remove from Favorites',
            viewDetails: 'View Details',
            hideDetails: 'Hide Details',
        },
        et: {
            favoritesTitle: 'Lemmikud',
            removeFromFavorites: 'Eemalda lemmikutest',
            viewDetails: 'Vaata detaile',
            hideDetails: 'Peida detailid',
        },
        ru: {
            favoritesTitle: 'Избранное',
            removeFromFavorites: 'Удалить из избранного',
            viewDetails: 'Просмотреть детали',
            hideDetails: 'Скрыть детали',
        },
    };

    const { favoritesTitle, removeFromFavorites, viewDetails, hideDetails } = translations[language] || translations.en;

    const [expandedBookId, setExpandedBookId] = useState(null);

    const handleRemoveFromFavorites = (bookId) => {
        onRemoveFromFavorites(bookId);
    };

    const toggleExpand = (bookId) => {
        setExpandedBookId(expandedBookId === bookId ? null : bookId);
    };

    return (
        <Container>
            <Typography variant="h4" component="div" sx={{ marginY: 2 }}>
                {favoritesTitle}
            </Typography>
            {favorites.map((book) => (
                <Card key={book.id} sx={{ marginBottom: 2 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {book.volumeInfo.title}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            Authors: {book.volumeInfo.authors?.join(', ')}
                        </Typography>
                        {expandedBookId === book.id ? (
                            <>
                                <Typography variant="body2" sx={{ mt: 1 }}>
                                    {book.volumeInfo.description}
                                </Typography>
                                <Button size="small" onClick={() => toggleExpand(book.id)}>{hideDetails}</Button>
                            </>
                        ) : (
                            <Typography variant="body2" sx={{ mt: 1 }}>
                                {book.volumeInfo.description?.substring(0, 100)}...
                                <Button size="small" onClick={() => toggleExpand(book.id)}>{viewDetails}</Button>
                            </Typography>
                        )}
                        <Button onClick={() => handleRemoveFromFavorites(book.id)}>{removeFromFavorites}</Button>
                    </CardContent>
                </Card>
            ))}
        </Container>
    );
};

export default Favorites;
