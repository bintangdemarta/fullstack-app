const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

// API endpoint
app.get("/api", (req, res) => {
  res.json({ message: "API berjalan 🚀" });
});

// serve static frontend
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// fallback SPA route
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
