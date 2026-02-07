#!/usr/bin/env node
/**
 * Custom server for cPanel: listens on process.env.PORT so cPanel can assign the port.
 * Run after: npm install && npm run build
 * In cPanel set Application startup file to: server.js
 * Ensure PORT is set in your Node.js app settings (cPanel usually sets it automatically).
 */
const http = require('http');
const { parse } = require('url');

process.chdir(__dirname);

// cPanel sets PORT for Node.js apps. Avoid 3000 (often already in use).
const rawPort = process.env.PORT || process.env.NODE_PORT;
const port = parseInt(rawPort || '', 10);
const usePort = (port >= 1 && port <= 65535) ? port : 0;
if (usePort === 0) {
  console.warn('PORT not set. Using 8080. In cPanel set PORT in Node.js app environment.');
}
const listenPort = usePort || 8080;

const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: __dirname });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = http.createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  server.listen(listenPort, '0.0.0.0', () => {
    const actualPort = server.address().port;
    console.log('> Next.js ready on http://0.0.0.0:' + actualPort);
  });
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
