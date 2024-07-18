const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = 3000;

// Set up the SQLite database
const dbPath = path.join(__dirname, 'database', 'quiz.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '.')));

// Save student to the database
app.post('/api/saveStudent', (req, res) => {
    const { name, usn } = req.body;
    const sql = `INSERT INTO Students (name, usn) VALUES (?, ?)`;
    db.run(sql, [name, usn], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ studentId: this.lastID });
    });
});

// Fetch 5 questions from the database for the given module
app.get('/api/questions/:module', (req, res) => {
    const module = req.params.module;
    const sql = `SELECT * FROM Questions WHERE module = ? LIMIT 5`;
    db.all(sql, [module], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// Save student's score to the database
app.post('/api/saveScore', (req, res) => {
    const { studentId, module, score } = req.body;
    const column = `score_module_${module}`;
    const adjustedScore = score;
    const sql = `UPDATE Students SET ${column} = ? WHERE id = ?`;
    db.run(sql, [adjustedScore, studentId], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Score saved successfully' });
    });
});

// Save feedback and ratings to the database
app.post('/api/saveFeedback', (req, res) => {
    const { studentId, module, rating, feedback } = req.body;
    const sql = `INSERT INTO Feedback (studentId, module, rating, feedback) VALUES (?, ?, ?, ?)`;
    db.run(sql, [studentId, module, rating, feedback], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Feedback saved successfully' });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
