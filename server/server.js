// require('newrelic');

const express = require('express');
const morgan = require('morgan');
const router = require('./routes.js');
const expressStaticGzip = require('express-static-gzip');
const compression = require('compression')

const app = express();
const PORT = 2222 || process.env.PORT;

// app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/products', router);

app.use('/', compression());
app.use('/', expressStaticGzip('client/dist', {
  enableBrotli: true,
  customCompressions: [{
      encodingName: 'deflate',
      fileExtension: 'zz'
  }],
  orderPreference: ['br']
}));

app.listen(PORT, function() {
  console.log(`Server listening at http://localhost:${PORT}`);
});

// loader.io testing
app.use(`/${process.env.LOADERIO}/`, (req, res) => {
  res.send(`${process.env.LOADERIO}`);
});