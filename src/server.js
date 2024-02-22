const express = require('express');
const routes = require('./routes/routes');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/app/', routes);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`)
});
