const express = require('express');
const app = express();

app.use(express.json()); // parse JSON bodies

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/data2', (req, res) => {  res.json({ data: [
    { id:1, name: "Customer A" },
    { id:2, name: "Customer B" },
    { id:3, name: "Customer C" },
  ] });
});

app.listen(3000, () => console.log('Server on :3000'));

app.use(express.static('public'));