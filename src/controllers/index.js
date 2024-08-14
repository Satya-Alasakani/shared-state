// Import necessary modules
const path = require('path');

// Function to handle the root route ("/")
function handleRootRoute(req, res) {
  // Render the main.html view
  res.sendFile(path.join(__dirname, '../views/main.html'));
}

// Export the module
module.exports = {
  handleRootRoute
};