const express = require('express');
const routes = require('./routes/routes');

const app = express();
const PORT = 3000;

app.use('/app/', routes);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`)
});
