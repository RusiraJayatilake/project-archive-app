const path = require('path');
const sqlite = require('sqlite3').verbose();

// Create database
const dbPath = path.join(__dirname, '../src/data', 'projectShelf.db');
const db = new sqlite.Database(dbPath);

const createTable = `
    CREATE TABLE IF NOT EXISTS project (
        id INTEGER PRIMARY KEY,
        title TEXT,
        description TEXT,
        reference TEXT,
        images TEXT
    )
`;

// Create Table
db.run(createTable, function(err) {
    if(err){
        console.error("Error creating table", err.message);
    } else {
        console.log("Table Successfully Created");
    }
});


module.exports = db;

