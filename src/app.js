const express = require('express');
const path = require('path');
const app = express();

// Import routes
const indexRoutes = require('./routes/index');

// Set up middleware
app.use(express.static(path.join(__dirname, 'public')));

// Set up routes
app.use('/', indexRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});