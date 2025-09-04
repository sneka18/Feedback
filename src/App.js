import React, { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";

function App() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [editFeedback, setEditFeedback] = useState(null);

  const addFeedback = (newFeedback) => {
    setFeedbacks([newFeedback, ...feedbacks]);
  };

  const updateFeedback = (updatedFeedback) => {
    setFeedbacks(
      feedbacks.map((fb) => (fb.id === updatedFeedback.id ? updatedFeedback : fb))
    );
    setEditFeedback(null);
  };

  const deleteFeedback = (id) => {
    setFeedbacks(feedbacks.filter((fb) => fb.id !== id));
  };

  const editHandler = (feedback) => {
    setEditFeedback(feedback);
  };

  const averageRating =
    feedbacks.length > 0
      ? (feedbacks.reduce((sum, fb) => sum + fb.rating, 0) / feedbacks.length).toFixed(1)
      : 0;

  return (
    <div className="app">
      <h1>Feedback Collector</h1>
      <p className="average">Average Rating: {averageRating} ★</p>
      <FeedbackForm
        addFeedback={addFeedback}
        editFeedback={editFeedback}
        updateFeedback={updateFeedback}
      />
      <FeedbackList
        feedbacks={feedbacks}
        deleteFeedback={deleteFeedback}
        editHandler={editHandler}
      />
    </div>
  );
}

export default App;
