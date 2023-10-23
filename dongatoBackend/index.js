const express = require('express');
const cors = require('cors')
const app = express();

// middlewares
app.use(cors())
app.use(express.json());
//app.use(express.urlencoded())

//routes
app.use(require('./routes/routes'))

app.listen(3000)
console.log('server on port 3000')


module.exports = app;
