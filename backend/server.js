const express = require('express');
const dotenv = require('dotenv').config();
const port = 5001;

const app = express();

app.listen(port, () => console.log(`server started on port ${port}`));