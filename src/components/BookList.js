import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const BookList = ({ books, onSelectBook }) => {
    return (
        <div>
            {books.map((book) => (
                <Card key={book.id} onClick={() => onSelectBook(book)} sx={{ marginBottom: 2 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {book.volumeInfo.title}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {book.volumeInfo.authors?.join(', ')}
                        </Typography>
                        <Typography variant="body2">
                            {book.volumeInfo.description?.substring(0, 100)}...
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default BookList;
