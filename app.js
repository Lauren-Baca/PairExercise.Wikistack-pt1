const express = require('express');
const morgan = require('morgan');
const { addPage, editPage, main, userList, userPages, wikiPage, layout } = require('./views');
const { db } = require('./models');
const app = express();

app.use(morgan("dev"));
app.use(express.static('/public'));
app.use(express.urlencoded({ extended: false }));

db.authenticate().then(() => {console.log('connected to the datbase');});

app.get('/', (req, res) => {
    console.log('Hello World');
    const siteLayout = layout('');
    res.send(siteLayout);
});

const PORT = 8008;

app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });