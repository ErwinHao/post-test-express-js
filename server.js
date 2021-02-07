const express = require('express');
const app = express();

const bookRoutes = require('./routers/book')

app.use(express.json());

app.use('/api', bookRoutes);

app.listen(5000);