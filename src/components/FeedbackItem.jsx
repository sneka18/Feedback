import React from "react";

function FeedbackItem({ feedback, deleteFeedback, editHandler }) {
  return (
    <div className="feedback-item">
      <h3>{feedback.name}</h3>
      <div className="rating-display">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className={star <= feedback.rating ? "star filled" : "star"}>
            ★
          </span>
        ))}
      </div>
      <p>{feedback.message}</p>
      <div className="buttons">
        <button className="edit-btn" onClick={() => editHandler(feedback)}>
          Edit
        </button>
        <button className="delete-btn" onClick={() => deleteFeedback(feedback.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default FeedbackItem;
