import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Poll = () => {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/questions/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error('Failed to fetch questions:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div id='page-wrapper'>
      <div id='header-container'>
        <h3>Poll Page (even though this is a spa): </h3>
        {isLoading ? (
          <p>Loading questions...</p>
        ) : (
          questions.map((question) => (
            <div key={question.id}>
              <div>Choice One: {question.choice_one.title}</div>
              <div>Choice Two: {question.choice_two.title}</div>
            </div>
          ))
        )}
      </div>
      <div id='poll-links-container'>
        <Link id='home-link' to='/'>Home</Link>
        <Link id='past-results-link' to='/results'>Past Results</Link>
      </div>
    </div>
  );
}

export default Poll;
