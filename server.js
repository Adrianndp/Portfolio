const express = require("express");

const app = express();
const PORT = 5050;

app.get("/api/test", (req, res) => {
  res.json({ message: "Server is working!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});