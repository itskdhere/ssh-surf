const express = require('express');
const path = require('path');

const server = express();

const port = process.env.PORT || 5500;

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

server.get('/nexusmelody/', (req, res) => {
  res.redirect('https://note-navigator.itskdhere.repl.co/');
});

server.get('/notenavigator/', (req, res) => {
  res.redirect('https://nexus-melody.itskdhere.repl.co/');
});

server.get('/joinserver/', (req, res) => {
  res.redirect('https://discord.com/invite/9CDh4Qh6vz');
});

server.listen(port, () => {
  console.log(`Server Running On Port ${port}`);
});