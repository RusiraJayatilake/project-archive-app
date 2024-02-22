const db = require('../config/database');

const writeData = (req, res) => {
    const {title, description, reference} = req.body;

    // INSERT data to table
    const sql = 'INSERT INTO project (title, description, reference) VALUES (?, ?, ?)';
    db.run(sql, [title, description, reference], (err) => {
        if (err){
            return res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Data added successfully' });
        }
    });
};

const readData = (req, res) => {
    const sqlRead = 'SELECT * FROM project';
    db.all(sqlRead, [], (err, rows) => {
        if(err){
            return res.status(500).json({ error: err.message });
        } else {
            // Create an array to hold the data
            const data = [];
            rows.forEach((row) => {
                data.push({
                    id: row.id,
                    title: row.title,
                    description: row.description,
                    reference: row.reference,
                });
            });
        
            res.json(data);
        }
    });
};

const deleteData = (req, res) => {
    const { id } = req.params; 
    const sqlCMD = 'DELETE FROM project WHERE id = ?';
    db.run(sqlCMD, id, (err) => {
        if (err){
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Data deleted successfully' });
    });
};


module.exports = {writeData, readData, deleteData};