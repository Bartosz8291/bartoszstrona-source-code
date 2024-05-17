const express = require('express');
const app = express();
const fetch = require('node-fetch');
const path = require('path');

// Serve static files (like CSS, JavaScript, images)
app.use(express.static('public'));

// Serve index.html for both / and /home routes
app.get(['/', '/home'], (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route to fetch CSS file
app.get('/style.css', async (req, res) => {
  try {
    const response = await fetch('https://31951d4a-cd29-4109-9b9a-13c506dc6c4f-00-p452nnaa0qnk.riker.replit.dev/style.css');
    const css = await response.text();
    res.header('Content-Type', 'text/css');
    res.send(css);
  } catch (error) {
    console.error('Error fetching CSS:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Route to fetch JavaScript file
app.get('/script.js', async (req, res) => {
  try {
    const response = await fetch('https://31951d4a-cd29-4109-9b9a-13c506dc6c4f-00-p452nnaa0qnk.riker.replit.dev/script.js');
    const script = await response.text();
    res.header('Content-Type', 'application/javascript');
    res.send(script);
  } catch (error) {
    console.error('Error fetching JavaScript:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Route to handle fetch request for PHP file
app.post('/fetches/1.php', async (req, res) => {
  try {
    const response = await fetch('https://31951d4a-cd29-4109-9b9a-13c506dc6c4f-00-p452nnaa0qnk.riker.replit.dev/fetches/1.php', { method: 'POST' });
    const data = await response.text();
    res.send(data);
  } catch (error) {
    console.error('Error fetching PHP:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Route to handle image fetch request
app.get('/app.png', async (req, res) => {
  try {
    const response = await fetch('https://31951d4a-cd29-4109-9b9a-13c506dc6c4f-00-p452nnaa0qnk.riker.replit.dev/app.png');
    const imageBuffer = await response.buffer();
    res.header('Content-Type', 'image/png');
    res.send(imageBuffer);
  } catch (error) {
    console.error('Error fetching image:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
