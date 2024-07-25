// importing modules
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Path to the JSON file where data is stored
const dbPath = path.join(__dirname, '../db/db.json');

// Middleware to read data from JSON file
const readData = () => {
    // reading file and parsing while returning json data
    const data = fs.readFileSync(dbPath, 'utf8');
    return JSON.parse(data);
};

// Middleware to write data to JSON file
const writeData = (data) => {
    fs.writeFileSync(dbPath, JSON.stringify(data));
};

// GET displays notes
router.get('/notes', (req, res) => {
    // reading file and sending notes as json
    const notes = readData();
    res.json(notes);
});

// POST creates a new note
router.post('/notes', (req, res) => {
    // reading json data and getting new note from the request body
    const notes = readData();
    const newNote = req.body;
    // creating unique id for the notes
    newNote.id = Date.now().toString();
    console.log(newNote.id);
    // adding notes to array
    notes.push(newNote);
    // updating new notes as json
    writeData(notes);
    // sending notes as json
    res.json(newNote);
});

// Deletes note by id
router.delete('/notes/:id', (req, res) => {
    const notes = readData();
    // iterating notes from id
    const filteredNotes = notes.filter(note => note.id !== req.params.id);
    writeData(filteredNotes);
    res.json({ success: true });
});

module.exports = router;
