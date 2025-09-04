import React from "react";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedbacks, deleteFeedback, editHandler }) {
  if (feedbacks.length === 0) return <p className="no-feedback">No feedback yet!</p>;

  return (
    <div className="feedback-list">
      {feedbacks.map((fb) => (
        <FeedbackItem
          key={fb.id}
          feedback={fb}
          deleteFeedback={deleteFeedback}
          editHandler={editHandler}
        />
      ))}
    </div>
  );
}

export default FeedbackList;
