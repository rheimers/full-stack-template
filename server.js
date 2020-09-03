const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

// Serve any static files
app.use(express.static(path.join(__dirname, "client/build")));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
