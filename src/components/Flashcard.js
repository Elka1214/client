import React, { useState } from "react";

const Flashcard = ({ flashcard }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={handleFlip}>
      <div className="card-content">
        {isFlipped ? flashcard.answer : flashcard.question}
      </div>
    </div>
  );
};

export default Flashcard;
