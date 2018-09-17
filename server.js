const path = require('path')
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const chessRouter = require("./routes/chess")
const app = express();
const port = process.env.PORT || 5000;

app.use('/', chessRouter);

// any remaining requests with an extension (.js, .css, etc.)
app.use(morgan('dev'))

//body parsing middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal Server Error.')
})

app.listen(port, () => console.log(`Listening on port ${port}`))
