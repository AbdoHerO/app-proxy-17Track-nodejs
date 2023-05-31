const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// app.post('/webhook/17track', (req, res) => {
//     // Handle the incoming webhook request
//     const payload = req.body; // Access the payload data sent by 17TRACK
//     console.log('Webhook payload:', payload); // Log the payload for testing
  
//     // Process the payload and perform any necessary actions
  
//     res.sendStatus(200); // Respond with a success status code
// });

app.all('/webhook/17track', (req, res) => {
    if (req.method === 'GET') {
      // Handle GET request
      console.log('METHODE', "GET");
      res.sendStatus(200); // Respond with a success status code or any desired response
    } else if (req.method === 'POST') {
      // Handle POST request
      const payload = req.body; // Access the payload data sent by 17TRACK
      console.log('Webhook payload:', payload); // Log the payload for testing
  
      console.log('METHODE', "POST");
      // Process the payload and perform any necessary actions
  
      res.sendStatus(200); // Respond with a success status code
    } else {
      res.sendStatus(405); // Respond with a "Method Not Allowed" status code for other methods
    }
  });

const port = 3000; // Specify the port number
app.listen(port, () => {
  console.log(`Webhook server is running on port ${port}`);
});
  
// var http = require('http') ; 
// function onRequest( request, response) {
//      response.writeHead(200, {'Content-Type': 'text/plain'}); 
//      response.write('Hello World'); 
//      response. end(); 
// }
// http.createServer(onRequest).listen(8000); 
