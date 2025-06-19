const cookieParser = require('cookie-parser');
const express = require('express');
const port = 3000;
const app = express();
const db = require('./config/mongoose-connection');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser());
app.set('view engine', 'ejs');



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
