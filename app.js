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


//Fill em in ^^
app.use('/', express.static(path.join(__dirname, '..','/client/build')));

app.use(express.static(path.join(__dirname, '..', 'public')))

//sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client/public/index.html'))
})

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal Server Error.')
})

app.listen(port, () => console.log(`Listening on port ${port}`))
