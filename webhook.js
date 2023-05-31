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

app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', "default-src 'none'; font-src 'self' data:;");
    next();
  });


  let trackingData = null;

  app.post('/webhook/17track', (req, res) => {
    // Process and extract the tracking data from the webhook payload
    const { data } = req.body;
  
    // Store the tracking data temporarily
    trackingData = data;
  
    // Respond with a success message
    res.status(200).json({ message: 'Webhook event received and data stored.' });
  });
  
  app.get('/tracking-data', (req, res) => {
    if (trackingData) {
      // Return the stored tracking data
      res.status(200).json(trackingData);
    } else {
      // Return an empty response or an appropriate error message
      res.status(404).json({ error: 'Tracking data not found.' });
    }
  });

const port = 3000; // Specify the port number
app.listen(port, () => {
  console.log(`Webhook server is running on port ${port}`);
});