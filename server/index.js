const express = require('express');
const path = require('path');
const {CowList, readAll, addOne, deleteOne} = require('./db.js')

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "../client/dist")));


app.get('/api/cows', (req, res) => {
  readAll((err, data) => {
    if (err) {
      console.log(err)
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  })
})

app.post('/api/cows', (req, res) => {
  addOne(req.body, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      readAll((err, data) => {
        if (err) {
          console.log(err)
          res.status(500).send(err);
        } else {
          res.status(200).send(data);
        }
      })
    }
  })
})

app.delete('/api/cows', (req, res) => {
  deleteOne(req.body, (err, data) => {
    if (err) {
      console.log('error updating', err)
      res.status(500).send('error updating')
    } else {
      readAll((err, data) => {
        if (err) {
          console.log(err)
          res.status(500).send(err);
        } else {
          res.status(201).send(data);
        }
      })
    }
  })
})

let port = 3000;
app.listen(port)
console.log(`listening at localhost : ${port}`)