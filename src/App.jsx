import { useEffect, useState } from 'react';
import Feedback from './components/Feedback/Feedback.jsx';
import Options from './components/Options/Options.jsx';
import Notification from './components/Notification/Notification.jsx';
import Description from './components/Description/Description.jsx';

export default function App() {
  const STORAGE_KEY = 'feedbackData';

  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const { good, neutral, bad } = feedback;

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = type => {
    setFeedback(prev => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = good + neutral + bad;
  const positivePercentage =
    totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;

  return (
    <div>
      <h1>Sip Happens Café</h1>

      <Description text="Please leave your feedback about our service by selecting one of the options below." />

      <Options
        onLeaveFeedback={updateFeedback}
        onReset={resetFeedback}
        total={totalFeedback}
      />

      {totalFeedback > 0 ? (
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positive={positivePercentage}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </div>
  );
}
