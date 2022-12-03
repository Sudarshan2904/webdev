// console.log("hi Harry");

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Tables and lists</title>
  </head>
  
  <body>
      <!-- lists -->
      <ul type="square">
          <li>this is first</li>
          <li>this is first</li>
          <li>
              <ul>
                  <li>you r clever</li>
                  <li>you r brave</li>
              </ul>
          </li>
      </ul>
      <ol type="I">
          <li>this is second</li>
          <li>this is second</li>
          <li>this is second</li>
      </ol>
  
      <!-- tables -->
      <h2>HTML Tables</h2>
      <table>
          <thead>
              <tr>
                  <th>name</th>
                  <th>4th percentage</th>
                  <th>10th percentage</th>
                  <th>12th percentage</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>sudarshan</td>
                  <td>88</td>
                  <td>89.8</td>
                  <td>86</td>
              </tr>
              <tr>
                  <td>sonal</td>
                  <td>88</td>
                  <td>80</td>
                  <td>68</td>
              </tr>
          </tbody>
      </table>
  
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// code copied from node.js documentation from internet  