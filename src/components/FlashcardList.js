import React from "react";
import Flashcard from "./Flashcard";

const FlashcardList = ({ flashcards }) => {
  return (
    <div className="card-grid">
      {flashcards.map((flashcard, index) => (
        <Flashcard key={index} flashcard={flashcard} />
      ))}
    </div>
  );
};

export default FlashcardList;
