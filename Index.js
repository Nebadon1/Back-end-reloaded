require('dotenv').config();

const server = require('./server');

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Get ready for the food!, is serving on port ${port}`)
});