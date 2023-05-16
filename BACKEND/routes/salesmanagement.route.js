const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ordersRouter = require('./routes/orders');

const app = express();


mongoose.connect('mongodb://localhost/sales', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB');
});


app.use(bodyParser.json());


app.use('/orders', ordersRouter);


app.listen(3000, () => {
  console.log('Server started on port 3000');
});
