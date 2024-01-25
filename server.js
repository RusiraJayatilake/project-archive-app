const express = require('express');
const appRoutes = require('./src/routes/routes');
const app = express();
const PORT = 1001;

app.use('/api/', appRoutes);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`)
});
