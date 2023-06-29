const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const Relic = require('./models/relic');

const dbUrl = 'mongodb+srv://sebastiansarm:1234@cluster0.at2e2ez.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true});


app.use(express.static(path.join(__dirname, 'dist')));

app.use(express.json());

app.post('/api/relics', async (req, res) => {
    const newRelic = new Relic(req.body);
    await newRelic.save();
    res.status(201).send(newRelic);
});

app.get('/api/relics', async (req, res) => {
    const relics = await Relic.find();
    res.send(relics);
});

app.get('/api/relics/:id', async (req, res) => {
    const relic = await Relic.findById(req.params.id);
    res.send(relic);
});

app.put('/api/relics/:id', async (req, res) => {
    const relic = await Relic.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.send(relic);
});

app.delete('/api/relics/:id', async (req, res) => {
    await Relic.findByIdAndRemove(req.params.id);
    res.status(204).send();
});

app.use((req, res) => res.sendStatus(404));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});