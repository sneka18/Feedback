import React, { useState, useEffect } from "react";

function FeedbackForm({ addFeedback, editFeedback, updateFeedback }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (editFeedback) {
      setName(editFeedback.name);
      setMessage(editFeedback.message);
      setRating(editFeedback.rating);
    }
  }, [editFeedback]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || message.trim() === "" || rating === 0) return;

    const newFeedback = {
      id: editFeedback ? editFeedback.id : Date.now(),
      name,
      message,
      rating,
    };

    if (editFeedback) {
      updateFeedback(newFeedback);
    } else {
      addFeedback(newFeedback);
    }

    setName("");
    setMessage("");
    setRating(0);
  };

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Your Feedback"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={star <= rating ? "star filled" : "star"}
            onClick={() => setRating(star)}
          >
            ★
          </span>
        ))}
      </div>
      <button type="submit">{editFeedback ? "Update Feedback" : "Add Feedback"}</button>
    </form>
  );
}

export default FeedbackForm;
