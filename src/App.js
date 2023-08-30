import React, { useState, useEffect } from "react";
import "./App.css";
import FlashcardList from "./components/FlashcardList";
import SignIn from "./components/SignIn";

function App() {
  const [user, setUser] = useState(null);
  const [flashcards, setFlashcards] = useState([]);

  const handleSignIn = (username) => {
    setUser(username);
  };

  useEffect(() => {
    // Fetch flashcards from the backend API
    fetch("http://localhost:5000/api/flashcards")
      .then((response) => response.json())
      .then((data) => setFlashcards(data))
      .catch((error) => console.error("Error fetching flashcards:", error));
  }, []);

  return (
    <div className="App">
      <h1>Flashcard App</h1>
      {user ? (
        <>
          <FlashcardList flashcards={flashcards} />
          <p>Welcome, {user}!</p>
        </>
      ) : (
        <SignIn onSignIn={handleSignIn} />
      )}
    </div>
  );
}

export default App;
