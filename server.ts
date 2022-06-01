import app from './server/config/app';
import debug from 'debug';
debug('lesson3:server');
import http from 'http';
import { HttpError } from 'http-errors';
import { AddressInfo } from 'net';

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
 
const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val:string) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

function onError(error: HttpError) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  let addr = server.address() as string | AddressInfo;
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.debug('Listening on ' + bind);
}

// import express from 'express';

// const app = express();
// const port = 3000;

// app.get('/', (req, res) =>
// {
// res.send('Hello World!');
// });

// app.listen(port, () => 
// {
// console.log(`Example app listening on port ${port}`);
// });