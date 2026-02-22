const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

app.get("/api/test", (req, res) => {
  res.json({ message: "API working" });
});

app.use(express.static(path.join(__dirname, "frontend/build")));

app.get("/{*splat}", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/build/index.html"));
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
