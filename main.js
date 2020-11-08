const express = require('express')
const app = express()
const port = 8080
const host = '192.168.1.105'
const volume = require('./routes/volume');
const mute = require('./routes/mute');
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:19002');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.use('/mute', mute);
app.use('/volume', volume);

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, host, () => {
  console.log(`App listening at http://${host}:${port}`)
})