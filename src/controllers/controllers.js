const { db, writeProjectData, readProjectData, deleteProjectData} = require('../config/sqliteDB');

const writeData = ({ title, description, reference }) => {
    return new Promise((resolve, reject) => {
        // INSERT data to table
        const sql = writeProjectData();
        db.run(sql, [title, description, reference], (err) => {
            if (err){
                reject(err);
            } else {
                resolve();
            }
        });
    });
};

const readData = () => {
    return new Promise((resolve, reject) => {
        const sql = readProjectData();
        db.all(sql, [], (err, rows) => {
            if(err){
                reject(err);
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
            
                resolve(data);
            }
        });
    });
};

const deleteData = ({ id }) => {
    return new Promise((resolve, reject) => {
        const sql = deleteProjectData();
        db.run(sql, id, (err) => {
            if (err){
                reject(err);
            } else{
                resolve()
            }
        });
    });
};


module.exports = {writeData, readData, deleteData};