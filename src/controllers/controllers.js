const db = require('../config/database');

const writeData = (req, res) => {
    const {title, description, reference, images} = req.body;

    // INSERT data to table
    const sql = 'INSERT INTO project (title, description, reference, images) VALUES (?, ?, ?, ?)';
    db.run(sql, [title, description, reference, images], (err) => {
        if (err){
            return res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Data added successfully', dataId: this.lastID });
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
                // Push each row's data into the array
                data.push({
                    id: row.id,
                    title: row.title,
                    description: row.description,
                    reference: row.reference,
                    images: row.images
                });
            });
        
            res.json(data);
        }
    });
};

const deleteData = (req, res) => {
    const { id } = req.body;
    const sqlCMD = 'DELETE FROM project WHERE id = ?';
    db.run(sqlCMD, id, (err) => {
        if (err){
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Data deleted successfully' });
    });
};


module.exports = {writeData, readData, deleteData};