const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Static file server running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT}`);
});
