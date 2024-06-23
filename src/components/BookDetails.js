import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Card, CardContent, Typography, Button } from '@mui/material';

const BookDetails = ({ onAddToFavorites, language }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState(null);

    useEffect(() => {
        const fetchBookDetails = async () => {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
            const data = await response.json();
            setBook(data);
        };
        fetchBookDetails();
    }, [id]);

    const handleBackToList = () => {
        navigate('/');
    };

    const translations = {
        en: {
            addToFavorites: 'Add to Favorites',
            backToList: 'Back to Search',
        },
    };

    const { addToFavorites, backToList } = translations[language] || translations.en;

    return (
        <Container>
            {book && (
                <Card>
                    <CardContent>
                        <Typography variant="h4" component="div">
                            {book.volumeInfo.title}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {book.volumeInfo.authors?.join(', ')}
                        </Typography>
                        <Typography variant="body1">
                            {book.volumeInfo.description}
                        </Typography>
                        <Button onClick={() => onAddToFavorites(book)}>{addToFavorites}</Button>
                        <Button onClick={handleBackToList}>{backToList}</Button>
                    </CardContent>
                </Card>
            )}
        </Container>
    );
};

export default BookDetails;
