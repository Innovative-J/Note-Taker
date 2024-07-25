// Importing package modules
const express = require("express");
const path = require("path");
const router = express.Router();

// Route to handle GET requests for notes and * all others
router.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

router.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// exporting routers
module.exports = router;