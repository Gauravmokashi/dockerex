'use strict';

const express = require('express');
const axios = require('axios');

// Constants
const PORT = 4000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/users/:userId', async (req, res) => {
   let result =  await axios.get(`https://jsonplaceholder.typicode.com/users/${req.params.userId}`)
   res.send(result.data)
});

app.get('/albums/:userId', async (req, res) => {
    console.log(req.params)
    let result =  await axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${req.params.userId}`)
    res.send(result.data)
 });

 app.get('/photos/:albumId', async (req, res) => {
    let result =  await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${req.params.albumId}`)
    res.send(result.data)
 });

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);