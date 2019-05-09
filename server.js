const express = require('express');
const expressip = require('express-ip');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());

app.use(expressip().getIpInfoMiddleware);

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
  const { ipInfo } = req;
  console.log(ipInfo);
  localStorage.setItem('IP', ipInfo);
  res.send(ipInfo);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on Port ${PORT}`));
