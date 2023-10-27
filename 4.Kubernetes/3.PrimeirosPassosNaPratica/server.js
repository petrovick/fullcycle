const express = require('express');
const fs = require('node:fs'); 

const app = express();
const hostname = '0.0.0.0';
const port = 8000;

const startedAt = Date.now();

// // SIMULAÇÃO DE LOOP
// app.get('/healthz', (req, res) => {
//   const durationSeconds = (Date.now() - startedAt) / 1000;
  
//   if(durationSeconds < 10 || durationSeconds > 30) {
//     res.statusCode = 500;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end(`Duration: ${durationSeconds}\n`);
//   }

//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end(`OK!\n`);
// });

app.get('/healthz', (req, res) => {
  const durationSeconds = (Date.now() - startedAt) / 1000;
  
  // if(durationSeconds < 10) {
  //   res.statusCode = 500;
  //   res.setHeader('Content-Type', 'text/plain');
  //   res.end(`Duration: ${durationSeconds}\n`);
  // }

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`OK!\n`);
});

app.get('/', (req, res) => {
  const name = process.env.NAME;
  const age = process.env.AGE;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hello I'm ${name}, I'm ${age}!\n`);
});

app.get('/configmap-family', (req, res) => {

  const data = fs.readFileSync('myfamily/family.txt')
  if(!data) {
    console.log('File does not exists')
    throw new Error('File does not exists');
  }

  res.setHeader('Content-Type', 'text/plain');
  res.end(`My Family: ${data.toString()}\n`);
});

app.get('/configmap-family2', (req, res) => {

  const config = require('myfamily/config.json')
  if(!config) {
    console.log('Config file does not exists')
    throw new Error('Config file does not exists');
  }

  res.setHeader('Content-Type', 'text/plain');
  res.status(200).json(config);
});

app.get('/secret', (req, res) => {
  const user = process.env.USER;
  const password = process.env.PASSWORD;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`User: ${user}, Password: ${password}!\n`);
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});