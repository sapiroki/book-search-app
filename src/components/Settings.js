import React from 'react';
import { Container, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';

const Settings = ({ theme, setTheme, language, setLanguage }) => {
    const translations = {
        en: { settings: 'Settings', language: 'Language', theme: 'Theme', light: 'Light', dark: 'Dark' },
        et: { settings: 'Seaded', language: 'Keel', theme: 'Teema', light: 'Hele', dark: 'Tume' },
        ru: { settings: 'Настройки', language: 'Язык', theme: 'Тема', light: 'Светлая', dark: 'Темная' },
    };

    const { settings, language: lang, theme: th, light, dark } = translations[language] || translations.en;

    return (
        <Container>
            <Typography variant="h4" component="div" sx={{ marginY: 2 }}>
                {settings}
            </Typography>
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
                <InputLabel>{lang}</InputLabel>
                <Select value={language} onChange={(e) => setLanguage(e.target.value)}>
                    <MenuItem value="en">Inglise</MenuItem>
                    <MenuItem value="et">Eesti</MenuItem>
                    <MenuItem value="ru">Vene</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel>{th}</InputLabel>
                <Select value={theme} onChange={(e) => setTheme(e.target.value)}>
                    <MenuItem value="light">{light}</MenuItem>
                    <MenuItem value="dark">{dark}</MenuItem>
                </Select>
            </FormControl>
        </Container>
    );
};

export default Settings;


