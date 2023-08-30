const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");

app.use(bodyParser.json());

// Dummy flashcards data for demonstration
const flashcards = [
  { id: 1, question: "Question 1", answer: "Answer 1" },
  { id: 2, question: "Question 2", answer: "Answer 2" },
  // Add more flashcards...
];

// Get all flashcards
app.get("/api/flashcards", (req, res) => {
  res.json(flashcards);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use(cors());
