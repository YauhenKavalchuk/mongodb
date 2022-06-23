const express = require('express');
const mongoose = require('mongoose');
const movieRoutes = require('./routes/movie-routes');

const PORT = 3000;
const URL = "mongodb+srv://Yauhen:Pass321@cluster0.vmsciik.mongodb.net/moviebox?retryWrites=true&w=majority";

const app = express();
app.use(express.json());
app.use(movieRoutes);

mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log('Connected to MongoDB'))
  .catch((err) => console.log(`DB connection error: ${err}`));

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`listening port ${PORT}`);
});
