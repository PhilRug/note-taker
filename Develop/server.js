const express = require('express');
const path = require('path');
const fs = require('fs');
const { fetchNote, saveNote } = require('./helpers/note-input');
const uuid = require('./helpers/uuid');

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('/api/notes', (req, res) => {
    res.json(fetchNote());
});
app.post('/api/notes', (req, res) => {
    currentNote = fetchNote();
    const { title, text } = req.body;
    if (title && text) {
        let newNote = {
            id: uuid(),
            title,
            text
        };
        currentNote.push(newNote);
    }
});